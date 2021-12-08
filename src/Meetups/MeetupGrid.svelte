<script>
  import MeetupItem from "./MeetupItem.svelte";

  export let meetups;

  const addToFavorite = () => {
    console.log("clicked");
  };
</script>

<section class="meetups">
  {#each meetups as meetup (meetup.id)}
    <MeetupItem
      title={meetup.title}
      subtitle={meetup.subtitle}
      imageUrl={meetup.imageUrl}
      description={meetup.description}
      address={meetup.address}
      on:show-details
      on:mark-favorite
    />
  {/each}
</section>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
</style>
