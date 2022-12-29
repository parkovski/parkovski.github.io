<style>
  #page {
    position: relative;
    /* Subtract footer height */
    min-height: calc(100vh - 1.5rem);
    padding-bottom: 1.5rem;
  }

  nav {
    padding: 4px;
    border-bottom: 1px solid var(--color-border);
  }
  #menu {
    display: inline;
    list-style: none;
    padding-left: 0;
  }
  #menu>li {
    display: inline;
    overflow: hidden;
  }
  nav a {
    text-decoration: none;
  }

  #content {
    max-width: 960px;
    margin: 0 auto 3px;
    border-bottom: 1px solid var(--color-border);
  }

  footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    padding: .25rem 0;
    border-top: 1px solid var(--color-link);
  }
</style>
<div id="page">
  <nav>
    <ul id="menu">
      <li><a href="/">[home]</a></li>
      <li><a href="/writing">[writing]</a></li>
      <li><a href="/projects">[projects]</a></li>
      <li><a href="/resume">[resume]</a></li>
      <li><a href="/about">[about]</a></li>
    </ul>
  </nav>
  <div id="content">
    <slot></slot>
  </div>
  <footer>Copyright &copy; 2022 - {new Date().getFullYear()} Parker Snell</footer>
</div>
