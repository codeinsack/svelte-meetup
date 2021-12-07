<script>
  export let title;
  export let subtitle;
  export let imageUrl;
  export let description;
  export let address;
</script>

<article class="meetup-item">
  <header>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </header>
  <div class="image">
    <img src={imageUrl} alt={title} />
  </div>
  <div class="content">
    <p>{description}</p>
  </div>
  <footer>
    <button>Show Details</button>
    <button>Favorite</button>
  </footer>
</article>

<style>
  .meetup-item {
    border: 1px solid black;
    margin-bottom: 20px;
  }
</style>
