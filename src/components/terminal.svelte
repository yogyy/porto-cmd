<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { CONTENTS } from "../constants/content";
  import { escapeHTML } from "../lib/utils";
  import type { COMMAND } from "../types";
  import Input from "./input.svelte";

  let commands: { command: COMMAND; output: string }[] = [];
  let loading = false;

  let terminalRef: HTMLDivElement | HTMLButtonElement;
  let inputElement: HTMLInputElement;

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
  };

  function handleKeyDown(e: KeyboardEvent) {
    if (document.activeElement !== inputElement && e.key === "/") {
      e.preventDefault();
      inputElement.focus();
    }
  }

  onMount(() => {
    document.addEventListener("keydown", handleKeyDown);
  });

  onDestroy(() => {
    document.removeEventListener("keydown", handleKeyDown);
  });
</script>

<button
  on:click={(e) => {
    e.preventDefault();
    inputElement.focus();
  }}
>
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
      <Input
        bind:inputElement
        onSubmit={(command) => {
          command.length !== 0 && addCommand(command.toLowerCase());
          setTimeout(() => {
            terminalRef.scrollTop = terminalRef.scrollHeight;
            inputElement.focus();
          });
        }}
      />
    {/if}
  </div>
</button>

<style>
  .terminal {
    position: relative;
    min-height: calc(100vh - 190px);
    max-height: calc(100vh - 160px);
    overflow-y: scroll;
    padding: 4px 6px;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;

    &:hover {
      cursor: text;
    }

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  button {
    all: unset;
    aspect-ratio: 16/9;
    position: relative;

    background-color: hsl(var(--background-color));

    /* &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("/frieren.webp") no-repeat;
      background-position: center;
      background-size: cover;
      filter: brightness(0.55);
      z-index: -1;
    } */
  }

  @media (min-width: 1024px) {
    .terminal {
      aspect-ratio: 16/9;
      min-height: 0;
    }
  }
</style>
