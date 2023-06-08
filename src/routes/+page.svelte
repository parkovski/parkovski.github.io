<style>
  img {
    border-radius: 5px;
    padding: 2px;
    margin-left: 4px;
    background-color: #ddd;
    border: 1px solid #bbb;
  }
  @media (prefers-color-scheme: dark) {
    img {
      background-color: #444;
      border: 1px solid #555;
    }
  }
</style>

<svelte:head>
  <title>parkovski - home</title>
</svelte:head>

<div id="wrap-header">
  <h1>Parker Snell</h1>
</div>
<div id="wrap-body">
  <img style="float:right; max-width:400px" src="/saguaro.jpg">
  <p>Welcome to Parker's website.</p>
  <p>
    I started writing software in 2002 with a small hobbyist language called
    IBasic that no longer exists. Soon after this I started writing small
    websites in PHP/MySQL and games in Java. After publishing
    an <a href="https://github.com/parkovski/Chaturanga">Android game</a>
    (no longer on Google Play), I learned C++ by writing an
    <a href="https://github.com/parkovski/glazc">IBasic-compatible
      compiler</a>. I continued working in C++ and JavaScript, completing a
    <a href="https://github.com/parkovski/tsched">truss shipment scheduler</a>
    and a <a href="https://github.com/parkovski/tanks">small tanks game</a>
    among many other projects.
  </p>
  <p>
    In 2017 I started learning the <a href="https://www.unity.com">Unity</a>
    game engine and created a
    <a href="https://github.com/parkovski/scifi">Smash-style phone game</a>
    which sadly never got professional quality graphics and didn't make it to
    the app stores. Additionally Unity has since moved away from the networking
    platform I used, making the future of the game lie in a rewrite.
  </p>
  <p>
    At some point along the way, I created a rough
    <a href="https://github.com/parkovski/wsudo">proof-of-concept sudo
      utility</a> for Windows which has gained some minor popularity on GitHub.
    With this project, I mainly wanted to show that such a thing was possible,
    while recognizing that to create a production-ready security focused
    utility would be a huge undertaking. Fortunately, someone else has
    <a href="https://github.com/gerardog/gsudo">picked up the slack</a>.
  </p>
  <p>
    In the past I have been an avid traveler, but I currently live in Tucson,
    AZ, home of the
    <a href="https://en.wikipedia.org/wiki/Saguaro">saguaro</a>, where it's
    possible to lay in the sun any time of the year.
  </p>
  <div style="clear:right"></div>
</div>
