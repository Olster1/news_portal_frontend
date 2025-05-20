<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
	  import '../app.css';
    import "../style.css";
	
	  let { children } = $props();
</script>

<Navbar />
{@render children()}
