<script lang="ts">
  import { CONTENTS } from "../constants/content";
  import { escapeHTML } from "../lib/utils";
  import type { COMMAND } from "../types";
  import Input from "./input.svelte";

  let commands: { command: COMMAND; output: string }[] = [];
  let loading = false;

  let terminalRef: HTMLDivElement;

  const addCommand = async (command: COMMAND) => {
    let output: string | undefined;
    loading = true;
    if (command in CONTENTS) {
      output = await CONTENTS[command](command);
    } else if (command === "clear" || command === "cls" || command === "\\c") {
      loading = false;
      return (commands = []);
    } else {
      output = CONTENTS["error"](escapeHTML(command));
    }

    loading = false;
    commands = [...commands.slice(0, commands.length), { command, output }];
    if (terminalRef) {
      terminalRef.scrollTop = terminalRef.scrollHeight;
    }
  };
</script>

<div
  class="terminal"
  bind:this={terminalRef}
>
  {#each commands as { command, output }}
    <div style="font-size: 14px;">
      <Input {command} />
      {#if output}
        {@html output}
      {/if}
    </div>
  {/each}
  {#if !loading}
    <Input onSubmit={(command) => addCommand(command)} />
  {/if}
</div>

<style>
  .terminal {
    position: relative;
    min-height: calc(100vh - 190px);
    max-height: calc(100vh - 160px);
    margin-bottom: 20px;
    overflow-y: scroll;
    padding: 4px 6px;
  }

  .terminal::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/GIUU_lCaUAAkDhH.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    filter: brightness(0.55);
    z-index: -1;
  }

  .terminal::-webkit-scrollbar {
    width: 0;
  }

  .terminal {
    overflow: -moz-scrollbars-none;
  }

  .terminal {
    -ms-overflow-style: none;
  }

  @media (min-width: 1024px) {
    .terminal {
      aspect-ratio: 16/9;
      min-height: 0;
    }
  }
</style>