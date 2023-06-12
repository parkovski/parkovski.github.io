<script>
  import '$lib/styles/global.css';
  import Header from '$lib/cx/Header.svelte';
  import Footer from '$lib/cx/Footer.svelte';

  function closeMenu() {
    document.getElementsByTagName('header')[0].style.display = 'none';
    document.getElementById('open-menu').style.display = 'initial';
  }
</script>

<style>
  #page {
    position: relative;
    min-height: 100vh;
    padding-bottom: 1.25rem;
  }

  main {
    max-width: 1200px;
    background-color: var(--color-bg-2);
    border-radius: 5px;
    margin: 1rem auto 0;
    padding: .5rem 0 1rem;
  }
  @media (max-width: 640px) {
    main {
      margin-top: 0;
      border-radius: 0;
    }
  }
</style>

<div id="page">
  <Header/>
  <main>
    <slot/>
  </main>
  <Footer/>
</div>
