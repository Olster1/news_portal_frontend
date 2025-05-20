<script lang="ts">
    import Loading from "$lib/components/Loading.svelte";
    import SearchInput from "$lib/components/SearchInput.svelte";

    let loading : boolean = true;

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
    {/if}
</div>