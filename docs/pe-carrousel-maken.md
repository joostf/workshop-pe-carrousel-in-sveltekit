# Voorlichting - PE Carrousel in SvelteKit

## PE Carroussel maken

Met CSS en JavaScript ga je de carrousel stapje voor stapje enhancen.

### Aanpak

#### 1. Kopieer CSS
Kopieer in je code editor de CSS uit [voorbeeld.css](voorbeeld.css) in een `<style> ... </style>` element onderaan in  `> src > routes > +page.svelte`

```css
<style>
/* Plak de gekopieerde CSS hieronder*/

</style
```
#### 2. Uncomment @layers
Alle voorbeeld CSS staat in comments. Haal per `@layer` van boven naar beneden de comments weg en bekijk telkens in de browser wat er verandert aan de Carrousel. Elke CSS layer is een extra enhancement.

#### 3. Voeg onMount functie toe
Om in een Svelte component toegang te kunnen krijgen tot de `DOM` heb je de `onMount` functie nodig.

Voeg onderstaande code toe aan het `<script> ... </script>` element bovenaan het  `> src > routes > +page.svelte` component.

```javascript
<script>
  import { onMount } from "svelte";

  let { data } = $props();

  onMount(() => {
    // Kopieer hier de voorbeeld JavaScript
  });

</script
```

#### 4. Kopieer JavaScript
Kopieer in je code editor de JavaScript uit [voorbeeld.js](voorbeeld.js) in de `onMount` functie.








