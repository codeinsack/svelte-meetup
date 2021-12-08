<script>
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
<Modal>
  <h1>Hello!</h1>
</Modal>

<style>
  main {
    margin-top: 100px;
  }
</style>
