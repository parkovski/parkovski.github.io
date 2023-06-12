<script>
  import '$lib/styles/global.css';

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

  @keyframes open-menu {
    from { margin-top: -100%; }
    to { margin-top: 0; }
  }

  .open-menu {
    animation: open-menu 0.5s forwards;
  }

  .close-menu {
    animation: open-menu 0.5s backwards;
  }

  nav {
    font-size: 1.25em;
    padding: 8px 4px;
    background-color: var(--color-bg-2);
  }

  #menu {
    display: flex;
    gap: 0.25rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  @media (max-width: 640px) {
    header {
      display: none;
    }
    #menu {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
  #menu>li {
    margin: 0 4px;
  }
  nav a {
    color: var(--color-text);
    text-decoration: none;
  }
  nav a:hover, nav a:active {
    color: var(--color-hl);
  }

  #content {
    max-width: 1200px;
    background-color: var(--color-bg-2);
    border-radius: 5px;
    margin: 1rem auto;
    padding: .5rem 0 1rem;
  }
  @media (max-width: 640px) {
    #content {
      margin-top: 0;
    }
  }

  footer {
    line-height: 1;
    font-size: 75%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    padding: .25rem 0;
  }
</style>

<div id="page">
  <header>
    <nav>
      <ul id="menu">
        <li class="nophone">
          <a href="/"><img src="/favicon.png" alt="home" class="logo"></a>
        </li>
        <li class="phone" style="margin-top: 8px">
          <img src="/favicon.png" alt="home" class="logo" on:click={closeMenu}>
        </li>
        <li class="phone"><a href="/">home</a></li>
        <li><a href="/projects">projects</a></li>
        <li><a href="/writing">writing</a></li>
        <li><a href="/about">about</a></li>
      </ul>
    </nav>
  </header>
  <div id="content">
    <slot/>
  </div>
  <footer>Copyright &copy; 2022 - {new Date().getFullYear()} Parker Snell</footer>
</div>
