<script lang="ts">
    import Loading from "$lib/components/Loading.svelte";
    import SearchInput from "$lib/components/SearchInput.svelte";
    import { API_BACKEND_BASE_URL } from "$lib/constants";
    import type { NewsArticle } from "$lib/models/NewsArticle";
    import { fetchData } from '$lib/utils/fetchData';

    let loading : boolean = true;
    let articles : NewsArticle[] = [];

    async function loadArticles() {
      try {
        articles = await fetchData<NewsArticle[]>(`${API_BACKEND_BASE_URL}/api/news/latest`);
      } catch (err : any) {
      }
      
      loading = false;
    }

    async function loadSearchArticles(query : string) {
      try {
        articles = await fetchData<NewsArticle[]>(`${API_BACKEND_BASE_URL}/api/news/search?query=${query}`);
      } catch (err : any) {
      }
      
      loading = false;
    }

    loadArticles();

</script>

<svelte:head>
  <title>News Portal IO</title>
</svelte:head>

<div class="p-10 w-full m-auto">
  <div class="flex">
    <div class="flex-2 p-2"><h1 class="text-4xl font-bold mb-6 text-gray-900 text-left">Latest News</h1></div>
    <div class="flex-1 p-2 w-full text-right"><SearchInput /></div>

  </div>
    {#if loading}
      <div class="pt-5 text-center"><Loading /></div>
    {:else}
      {#each articles as article (article.url)}
      <li>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <small>Published at: {new Date(article.publishedAt).toLocaleDateString()}</small>
      </li>
    {/each}
    {/if}
</div>