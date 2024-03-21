<script lang="ts">
  import Input from "./input.svelte";

  export let command = "";
  export let output = "";
  export let onSubmit: ((arg0: string) => any) | null = null;
</script>

<div>
  <Input
    {command}
    onSubmit={(command) => onSubmit && onSubmit(command)}
  />
  {#if output}
    {@html output}
  {/if}
</div>
