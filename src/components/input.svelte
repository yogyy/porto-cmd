<script lang="ts">
  import { commandHistory } from "../lib/stores";

  export let command = "";
  export let onSubmit: ((arg0: string) => any) | null = null;
  export let inputElement: HTMLInputElement | null = null;

  let currentCommandIndex = -1;

  let _command = command || "";
  const handleSubmit = () => {
    onSubmit!(_command);
    if (_command.trim() !== "") {
      commandHistory.update((current) => [_command, ...current]);
    }
    _command = "";
  };

  function handleArrowUp() {
    if (currentCommandIndex < $commandHistory.length - 1) {
      currentCommandIndex++;
      const prevCMD = $commandHistory[currentCommandIndex];
      _command = prevCMD;
      console.log($commandHistory);
      setTimeout(() => {
        inputElement?.setSelectionRange(prevCMD.length, prevCMD.length);
      });
    }
  }

  function handleArrowDown() {
    if (currentCommandIndex > 0) {
      currentCommandIndex--;
      const nextCMD = $commandHistory[currentCommandIndex];
      _command = nextCMD;
      console.log($commandHistory);
    } else if (currentCommandIndex === 0) {
      currentCommandIndex = -1;
      _command = "";
    }
  }
</script>

<form
  on:submit|preventDefault={handleSubmit}
  style="display: flex; font-size: 14px;"
>
  <label for="command">
    <span style="color: #E36464;">@yogyy</span>{" "}
    <span style="color: hsl(var(--primary)); font-size: 12px;">➜</span>{" "}
    <span style="color: hsl(var(--secondary));">~</span>
  </label>

  <input
    type="text"
    class="input"
    id="command"
    disabled={command ? true : false}
    bind:value={_command}
    bind:this={inputElement}
    on:keydown={(e) => {
      if (e.key === "ArrowUp") {
        handleArrowUp();
      } else if (e.key === "ArrowDown") {
        handleArrowDown();
      } else if (e.key === "c" && (e.metaKey || e.ctrlKey)) {
        onSubmit && onSubmit(" ");
        _command = "";
      }
    }}
    style="width: fit-content;"
  />
</form>

<style>
  .input {
    background-color: transparent;
    border: 0;
    outline: none;
    padding-left: 6px;
    color: #a1a1aa;
    min-width: calc(100% - 100px);
  }
</style>
