<script>
  function closeMenu() {
    document.getElementById('menu-check').checked = false;
    return true;
  }

  function menuKeyDown(e) {
    if (e.keyCode === 13) {
      closeMenu();
    }
  }
</script>

<style>
  #menu-check {
    display: none;
  }
  #menu-check:checked + #menu-button > span {
    transform: rotate(45deg);
  }
  #menu-check:checked + #menu-button > span::before {
    top: 0;
    transform: rotate(0deg);
  }
  #menu-check:checked + #menu-button > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu-check:checked ~ #menu {
    left: 0;
  }

  #menu-button {
    position: fixed;
    top: 28px;
    left: 8px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    z-index: 1;
  }

  #menu-button > span,
  #menu-button > span::before,
  #menu-button > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--color-text);
    transition-duration: .25s;
  }
  #menu-button > span::before {
    content: '';
    top: -8px;
  }
  #menu-button > span::after {
    content: '';
    top: 8px;
  }

  #menu {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    width: 150px;
    height: 100%;
    margin: 0;
    padding: 40px 0;
    list-style: none;
    background: var(--color-bg-2);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    transition-duration: .25s;
    font-size: 125%;
  }

  #menu > li > a {
    display: block;
    padding: 4px 8px;
    color: var(--color-text);
    text-decoration: none;
    transition-duration: .25s;
  }

  #menu > li > a:hover {
    color: var(--color-hl);
  }

  @media (min-width: 640px) {
    #menu-button {
      display: none;
    }
    #menu {
      position: relative;
      left: 0;
      width: 100%;
      display: flex;
      gap: 4px;
      transition-duration: 0s;
      padding: 4px 8px;
    }
  }
</style>

<header>
  <input id="menu-check" type="checkbox">
  <label id="menu-button" for="menu-check">
    <span></span>
  </label>
  <ul id="menu" on:click={closeMenu} on:keydown={menuKeyDown}>
    <li>
      <a href="/">
        <img src="/favicon.png" alt="Logo" class="logo">
        <span class="phone"> home</span>
      </a>
    </li>
    <li><a href="/projects">projects</a></li>
    <li><a href="/writing">writing</a></li>
    <li><a href="/about">about</a></li>
  </ul>
</header>
