<script>
  const { data } = $props()

  const { images } = data
</script>

<main>
  <h1>Astronomy Picture of the Day</h1>

  {#each images as image }
    <article>
      <h2>{image.title}</h2>
      <img src="{image.url}" alt="{image.title}" width="500" height="500">
      <p>{image.description}</p>
    </article>
  {/each}
</main>

<style>
:global(body) {
  --bg-color:#0b3d91;
  color:#fff; 
  padding:2rem;
}

h2 {
  color: #fd3d21
}

img {
  max-width:100%;
  aspect-ratio: 1 / 1;
  border:10px solid #fd3d21
}

p {
  margin-bottom: 3rem;
}

</style>