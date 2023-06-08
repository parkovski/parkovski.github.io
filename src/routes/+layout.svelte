<style>
  #page {
    position: relative;
    /* Subtract footer height */
    min-height: calc(100vh - 1.25rem);
    padding-bottom: 1.25rem;
  }

  nav {
    font-size: 1.25em;
    padding: 8px 4px;
    background-color: var(--color-bg-2);
  }
  #menu {
    display: inline;
    list-style: none;
    padding-left: 0;
  }
  #menu>li {
    display: inline;
    overflow: hidden;
    margin: 0 8px;
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

  footer {
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
  <nav>
    <ul id="menu">
      <li><a href="/">home</a></li>
      <li><a href="/projects">projects</a></li>
      <li><a href="/writing">writing</a></li>
      <li><a href="/about">about</a></li>
    </ul>
  </nav>
  <div id="content">
    <slot name="header"></slot>
    <slot></slot>
  </div>
  <footer>Copyright &copy; 2022 - {new Date().getFullYear()} Parker Snell</footer>
</div>
