<script>
  import Title from '$lib/cx/Title.svelte';
</script>

<style>
  #saguaro {
    border-radius: 5px;
    padding: 2px;
    margin: 8px 0 0 0;
    background-color: #ddd;
    border: 1px solid #bbb;
    max-width: calc(100vw - 16px);
  }

  @media (prefers-color-scheme: dark) {
    #saguaro {
      background-color: #444;
      border: 1px solid #555;
    }
  }

  @media (min-width: 640px) {
    #saguaro {
      float: right;
      max-width: 400px;
      margin: 0 0 0 8px;
    }
  }
</style>

<svelte:head>
  <title>parkovski - home</title>
</svelte:head>

<Title>Parker Snell</Title>
<div id="wrap-body">
  <img id="saguaro" src="/saguaro.jpg" alt="Saguaro flowers">
  <p>Welcome to Parker's website.</p>
  <p>Check out my <a href="/projects">projects</a> or read my <a
      href="/about">about page</a>.
  <div style="clear:right"></div>
</div>
