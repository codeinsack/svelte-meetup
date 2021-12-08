<script>
  import { tick } from "svelte";
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import Modal from "./Modal.svelte";

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description: "In this meetup, we will have some experts that teach you",
      imageUrl: "https://picsum.photos/200/300",
      address: "27th Nerd Road, 32253 New York",
      contact: "code@test.com",
    },
  ];

  let title = "";
  let subtitle = "";
  let contact = "";
  let description = "";
  let showModal = false;
  let text = "This is dummy text...";

  const addMeetup = () => {
    const newMeetup = {
      id: Math.random().toString(),
      title,
      subtitle,
      contact,
      description,
    };
    meetups = [...meetups, newMeetup];
  };

  const showDetails = (event) => {
    console.log("clicked", event);
  };

  const toggleModal = () => {
    showModal = !showModal;
  };

  const transform = (event) => {
    if (event.which !== 9) {
      return;
    }
    event.preventDefault();
    const selectionStart = event.target.selectionStart;
    const selectionEnd = event.target.selectionEnd;
    const value = event.target.value;

    text =
      value.slice(0, selectionStart) +
      value.slice(selectionStart, selectionEnd).toUpperCase() +
      value.slice(selectionEnd);

    tick().then(() => {
      event.target.selectionStart = selectionStart;
      event.target.selectionEnd = selectionEnd;
    });
  };
</script>

<Header />
<main>
  <div>
    <form on:submit|preventDefault={addMeetup}>
      <input
        class="input-group"
        bind:value={title}
        type="text"
        placeholder="Title"
      />
      <input
        class="input-group"
        bind:value={subtitle}
        type="text"
        placeholder="Subtitle"
      />
      <input
        class="input-group"
        bind:value={contact}
        type="text"
        placeholder="EMail"
      />
      <textarea
        class="input-group"
        bind:value={description}
        rows="3"
        placeholder="Description"
      />
      <button type="submit">Save</button>
    </form>
  </div>
  <MeetupGrid {meetups} on:show-details={showDetails} on:mark-favorite />
</main>
<button on:click={toggleModal}>Toggle Modal</button>
{#if showModal}
  <Modal>
    <h1>Hello!</h1>
  </Modal>
{/if}
<textarea rows="5" value={text} on:keydown={transform} />

<style>
  main {
    margin-top: 100px;
  }
</style>
