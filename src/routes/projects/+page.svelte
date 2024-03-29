<script>
  import Title from '$lib/cx/Title.svelte';

  export let data;

  let selectedTag = null;
  let filteredProjects = data.projects;
  const tags = [
    ...data.projects
      .flatMap(x => x.tags)
      .reduce((set, tag) => {
        set.add(tag);
        return set;
      }, new Set)
    ].sort();

  function selectTag(e) {
    selectedTag = e.target.innerText;
    filteredProjects = data.projects.filter(p => ~p.tags.indexOf(selectedTag));
    return false;
  }

  function clearTag() {
    selectedTag = null;
    filteredProjects = data.projects;
    return false;
  }
</script>

<style>
  ul {
    list-style-type: none;
    padding: 0 2px;
    max-width: 960px;
    margin: 1.5rem auto 0;
  }

  details {
    line-height: 150%;
    border-radius: 3px;
    padding: 2px 4px;
  }
  details[open], details:hover {
    background-color: var(--color-bg-3);
  }
  li:not(:last-child) > details {
    border-bottom: 1px solid var(--color-border);
    margin-bottom: 0.25em;
  }
  summary {
    cursor: pointer;
  }

  .images {
    margin-top: 0.5rem;
  }

  details img {
    max-width: 100%;
  }

  span.right {
    float: right;
  }

  div.tags > span {
    line-height: 150%;
    cursor: pointer;
    font-size: 85%;
    background-color: var(--color-bg-3);
    padding: 0 2px;
    border-radius: 3px;
  }
  details div.tags > span {
    background-color: var(--color-border);
  }
  div.tags > span:hover {
    background-color: var(--color-bg-inv);
    color: var(--color-text-inv);
  }
  div.tags > span > span {
    margin-left: 4px;
    padding-left: 4px;
    border-left: 1px solid var(--color-bg-inv);
  }
  div.tags > span:hover > span {
    border-left-color: var(--color-bg-2);
  }
</style>

<svelte:head>
  <title>parkovski - projects</title>
</svelte:head>

<Title>Projects</Title>
<div id="wrap-body">
  <p>
    These are a highlighted selection of projects I've worked on over the
    years. More are available on
    <a href="https://github.com/parkovski" target="_blank" rel="noreferrer">my GitHub</a>.
  </p>
  {#if selectedTag}
    <div class="tags">
      Filtering by:
      <span on:click={clearTag} on:keypress={clearTag}>{selectedTag}<span>x</span></span>
    </div>
  {:else}
    <div style="display: flex">
      <div style="flex: 0 1 auto">Filter:&nbsp;</div>
      <div class="tags" style="flex: 1">
        {#each tags as tag}
          <span on:click={selectTag} on:keypress={selectTag}>{tag}</span>{' '}
        {/each}
      </div>
    </div>
  {/if}
  <ul>
    {#each filteredProjects as proj}
      <li>
        <details>
          <summary>
            <span class="right">
              {#if proj.images}
                <span style="color: var(--color-text-2)">pics </span>
              {/if}
              {#if proj.links}
                {#each proj.links as link}
                  <a href="{link.url}" target="_blank" rel="noreferrer">{link.text}</a>{' '}
                {/each}
              {/if}
              <a href="{proj.url}" target="_blank" rel="noreferrer">source</a>
            </span>
            <span class="name">{proj.name}</span>
          </summary>
          <div class="tags">
            {#each proj.tags.sort() as tag}
              <span on:click={selectTag} on:keypress={selectTag}>{tag}</span>{' '}
            {/each}
          </div>
          {proj.description}
          {#if proj.images}
            <div class="images">
            {#each proj.images as img}
              <img src="{img}" alt="Screenshot">
            {/each}
            </div>
          {/if}
        </details>
      </li>
    {/each}
  </ul>
</div>
