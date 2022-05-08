<script lang="ts">
  import { addEvent, events$ } from '@test-nx/firebase';
  let mgValue: number;
  $: mmolValue = mgValue * 0.0555;

  const addToFireStore = () => {
    if (isNaN(mgValue)) {
      return alert('Please provide a number');
    }

    addEvent({
      mgValue,
    });
  };
</script>

<main>
  <form on:submit|preventDefault>
    <input
      type="number"
      placeholder="Enter bg value mg/dl"
      bind:value={mgValue}
    />
    <h1>expected MMOL value: {mmolValue} mmol/L</h1>
    <div class="row">
      <button disabled>Add to Db</button>
      <button on:click={addToFireStore}>Add to fireStore</button>
    </div>
  </form>

  <br />

  {#if $events$}
    {#each $events$ as item}
      {JSON.stringify(item)}
      <br />
    {/each}
  {/if}
</main>
