<script lang="ts">
  export let command = "";
  export let onSubmit: ((arg0: string) => any) | null = null;

  let _command = command || "";
  const handleSubmit = () => {
    onSubmit!(_command);
    _command = "";
  };
</script>

<form
  on:submit|preventDefault={handleSubmit}
  style="display: flex; font-size: 14px;"
>
  <label for="command">
    <span style="color: #E36464;">@yogyy</span>{" "}
    <span style="color: var(--primary); font-size: 12px;">➜</span>{" "}
    <span style="color: var(--secondary);">~</span>
  </label>

  <input
    type="text"
    class="input"
    placeholder="help"
    on:change={(e) => (_command = e.currentTarget.value)}
    disabled={command ? true : false}
    bind:value={_command}
  />
</form>

<style>
  .input {
    background-color: transparent;
    border: 0;
    outline: none;
    padding-left: 6px;
    color: var(--text-color);
    min-width: calc(100% - 100px);
  }
</style>
