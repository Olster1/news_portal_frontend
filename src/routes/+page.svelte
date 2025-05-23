<script lang="ts">
  import { onMount } from "svelte";
  import { articles, loading, showingLatest, loadLatestArticles, querySearchArticles } from "$lib/stores/news";
  import Loading from "$lib/components/Loading.svelte";
  import NewsArticleComponent from "$lib/components/NewsArticle.svelte";
  import SearchInput from "$lib/components/SearchInput.svelte";

  onMount(() => {
    //NOTE: Only reload the articles if there arent any articles in the store already loaded
    if($articles.length == 0) {
      loadLatestArticles();
    }
    
  });
</script>

<svelte:head>
  <title>News Portal IO</title>
</svelte:head>

<div class="p-10 w-full m-auto">
  <div class="flex">
    <div class="flex-2 p-2"><h1 class="text-4xl font-bold mb-6 text-gray-900 text-left">
      {$showingLatest ? "Latest News" : "Search Results"}
    </h1></div>
    <div class="flex-1 p-2 w-full text-right"><SearchInput onSearch={querySearchArticles} onClear={loadLatestArticles} /></div>

  </div>
    {#if $loading}
      <div class="pt-5 text-center"><Loading /></div>
    {:else}
      {#if $articles.length == 0}
        <div class="pt-5 text-center"><h2 class="text-2xl font-bold text-gray-900">No Articles Found</h2></div>
      {:else}
        {#each $articles as article (article.url)} 
          <NewsArticleComponent {article} />
        {/each}
      {/if}
    {/if}
</div>