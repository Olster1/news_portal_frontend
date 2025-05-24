<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
	  import '../app.css';
      import "../style.css";
	
	  export let children;
</script>

<Navbar />
{@render children()}
