<style>
  h1 {
    margin: 0 0 4px;
    padding: 0 8px .5rem;
  }

  @media (max-width: 640px) {
    h1 {
      padding-left: 40px;
    }
  }

  #wrap-header {
    border-bottom: 1px solid var(--color-hl);
  }
</style>

<div id="wrap-header">
  <h1><slot/></h1>
</div>
