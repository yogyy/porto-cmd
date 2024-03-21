<script lang="ts">
  import Terminal from "./components/terminal.svelte";
</script>

<main>
  <div class="container">
    <h1>
      yogyy ~ <span class="help">type help to start</span>
    </h1>
    <p>
      Visit{" "}
      <a
        href="https://yogyy.vercel.app"
        target="_blank"
        rel="noreferrer"
      >
        Normal website
      </a>
    </p>

    <Terminal />
  </div>
</main>

<style>
  .container {
    min-height: 100dvh;
    padding: 2rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: 100dvh;
    max-width: 600px;
  }

  .help {
    color: var(--text-color);
  }
  @media (min-width: 640px) {
    .container {
      min-width: 37.5rem;
    }
  }
  @media (min-width: 1024px) {
    .container {
      min-width: 60rem;
    }
  }
</style>
