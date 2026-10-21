<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<style>
  article { padding: 0 1em; }
</style>


<svelte:head>
  <title>{ data.title }</title>
</svelte:head>

<article>
  <svelte:component this={data.content}/>
</article>
