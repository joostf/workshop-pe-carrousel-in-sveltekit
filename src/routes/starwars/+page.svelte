<script>
let { data } = $props()

const characters = data.swCharactersData.results
</script>

<main>
  <h1>Star Wars Characters</h1>

  <!-- lijst met karakters tonen -->

  <ul>
    {#each characters as character}
      <li>{character.name}</li>
    {/each}
  </ul>


</main>

<style>
  :global(body) {
    --bg-color:rgb(75, 169, 188);
    color:#fff; 
    padding:2rem;
  }

  main {
    border: 20px solid orange;
    padding:1rem;
  }

  ul {
    list-style:none;
    font-size: 1.5rem;
    padding:0;
  }
  
  li {
    background:rgb(251, 216, 182);
    margin-bottom:.5rem;
    padding:.25rem;
    color: rgb(75, 169, 188)
  }

</style>