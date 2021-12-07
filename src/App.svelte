<script>
  import Header from "./UI/Header.svelte";
  import MeetupItem from "./Meetups/MeetupItem.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";

  const meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description: "In this meetup, we will have some experts that teach you",
      imageUrl: "https://picsum.photos/200/300",
      address: "27th Nerd Road, 32253 New York",
      contact: "code@test.com",
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go swimming",
      description: "We will simply swim",
      imageUrl: "https://picsum.photos/200/300",
      address: "27th Nerd Road, 32253 New York",
      contact: "swim@test.com",
    },
  ];
</script>

<Header />
<MeetupGrid {meetups} />
