<!-- //NOTE: 
This is a resusable DUMB search component that takes a onSearch and onClear function as params. 
This doesn't do debouncing. Depending on the project, we may want all our searches to have debouncing,
or have another resuable DUMB search that has debouncing. 
-->
<script lang="ts">
  export let onSearch: (query: string) => void;
  export let onClear: () => void;

  let searchQuery: string = "";

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  }

  //NOTE: When user clears the input, we might want to do a clear of a search or something else.
  //NOTE: This triggers when they press the clear X on the input, but also when they backspace the string. 
  //NOTE: We might want to do more so it only does it when we press the clear button.
  function checkEmpty() {
    if(!searchQuery.trim()) {
      onClear();
    }
  }

  function handleButtonClick() {
    let s : string = searchQuery.trim();
    if (s.length > 0) { //NOTE: Check if the string is not empty
      onSearch(s);
    } 
  }
</script>

<label class="input" style="width: 100%">
   <input
    type="search"
    required
    placeholder="Search"
    bind:value={searchQuery}
    on:input={checkEmpty}
    on:keydown={handleKeydown}
  />
  <button on:click={handleButtonClick} aria-label="Search" type="button">
    🔍
  </button>
</label>