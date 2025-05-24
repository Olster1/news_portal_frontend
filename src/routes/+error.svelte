<script lang="ts">
	import "../style.css";
	import { page } from '$app/state';
</script>


<div class="p-10 w-full m-auto">
<h1 class="text-4xl font-bold mb-6 text-gray-900 text-center">{page?.status} {page?.error?.message}</h1>
</div>
