<!-- 
//NOTE: This is a resuable DUMB component to display a News Article. It requires you to pass in a NewsArticle object to display 
-->

<script lang="ts">
  import type { NewsArticle } from "$lib/models/NewsArticle";
  export let article: NewsArticle;
</script>

<a href={article.url} target="_blank" class="card shadow-xl flex-row mt-5 mb-5 rounded-l-md">
  <div class="flex flex-col justify-between p-5 w-2/3">
    <div>
      <h2 class="card-title text-xl">{article.title}</h2>
      <p class="text-sm text-gray-500 mt-1">{new Date(article.publishedAt).toLocaleDateString()}</p>
      <p class="mt-2">{article.description}</p>
    </div>
  </div>

  <div class="w-1/3 h-full overflow-hidden">
    <img src={article.image} alt={article.title} class="object-cover w-full h-full rounded-r-md" />
  </div>
</a>