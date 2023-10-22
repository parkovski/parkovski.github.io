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
  <title>parkovski - about</title>
</svelte:head>

<Title>About</Title>
<div id="wrap-body">
  <img id="saguaro" src="/saguaro.jpg" alt="Saguaro flowers">
  <p>
    I started writing software in 2002 with a small hobbyist language called
    IBasic that no longer exists. Soon after this I started writing small
    websites in PHP/MySQL and games in Java. After publishing
    an <a href="https://github.com/parkovski/Chaturanga" target="_blank"
      rel="noreferrer">Android game</a>
    (no longer on Google Play), I learned C++ by writing an
    <a href="https://github.com/parkovski/glazc" target="_blank"
      rel="noreferrer">IBasic-compatible
      compiler</a>. I continued working in C++ and JavaScript, completing a
    <a href="https://github.com/parkovski/tsched" target="_blank"
      rel="noreferrer">truss shipment scheduler</a>
    and a <a href="https://github.com/parkovski/tanks" target="_blank"
      rel="noreferrer">small tanks game</a>
    among many other projects.
  </p>
  <p>
    In 2017 I started learning the <a href="https://www.unity.com"
      target="_blank" rel="noreferrer">Unity</a>
    game engine and created a
    <a href="https://github.com/parkovski/scifi" target="_blank"
      rel="noreferrer">Smash-style phone game</a>
    which sadly never got professional quality graphics and didn't make it to
    the app stores. Additionally Unity has since moved away from the networking
    platform I used, making the future of the game lie in a rewrite.
  </p>
  <p>
    At some point along the way, I created a rough
    <a href="https://github.com/parkovski/wsudo" target="_blank"
      rel="noreferrer">proof-of-concept sudo
      utility</a> for Windows which has gained some minor popularity on GitHub.
    With this project, I mainly wanted to show that such a thing was possible,
    while recognizing that to create a production-ready security focused
    utility would be a huge undertaking. Fortunately, someone else has
    <a href="https://github.com/gerardog/gsudo" target="_blank"
      rel="noreferrer">picked up the slack</a>.
  </p>
  <p>
    In the past I have been an avid traveler; I currently live in Tucson,
    AZ, home of the
    <a href="https://en.wikipedia.org/wiki/Saguaro" target="_blank"
      rel="noreferrer">saguaro</a>, where
    <a href="https://www.youtube.com/watch?v=OhohteHuyPM" target="_blank"
      rel="noreferrer">everything sunny all the time always</a>.
  </p>
  <div style="clear:right"></div>
</div>
