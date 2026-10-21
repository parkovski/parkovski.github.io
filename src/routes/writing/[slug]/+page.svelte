<script lang="ts">
  import type { PageData } from './$types';
  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<style>
  article { padding: 0 1em; }
</style>


<svelte:head>
  <title>{ data.title }</title>
</svelte:head>

<article>
  <data.content/>
</article>
