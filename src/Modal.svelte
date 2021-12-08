<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";

  export let content;
  let agreed = false;
  let autoscroll = false;

  console.log("Script executed!");

  onMount(() => {
    console.log("Mounted!");
  });

  onDestroy(() => {
    console.log("Destroyed!");
  });

  beforeUpdate(() => {
    autoscroll = agreed;
  });

  afterUpdate(() => {
    if (autoscroll) {
      const modal = document.querySelector(".modal");
      modal.scrollTo(0, modal.scrollHeight);
    }
  });
</script>

<div>This is modal!</div>
<div><slot /></div>

<style>
</style>
