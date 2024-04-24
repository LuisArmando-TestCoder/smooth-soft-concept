<script lang="ts">
  import { onMount } from "svelte";

  let loadingScreen: HTMLElement;
  let progressValueElement: HTMLElement;
  let progressBarElement: HTMLElement;
  export let progressValue = 1;
  export let hasLoadingHadInteraction: boolean;

  onMount(() => {
    hasLoadingHadInteraction = false;

    (function frame() {
      progressBarElement.style.width = `${progressValue}%`;
      // console.log(progressValue);

      if ((progressValue += 1.5) > 100) return;

      requestAnimationFrame(frame);
    })();
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  bind:this={loadingScreen}
  on:click={() => {
    console.log("click!");
    hasLoadingHadInteraction = true;
  }}
  on:keydown={() => {
    console.log("key down!");
    hasLoadingHadInteraction = true;
  }}
  aria-pressed={hasLoadingHadInteraction}
  class="pulse-on-full-percentage {progressValue >= 100 && hasLoadingHadInteraction
    ? 'open'
    : 'closed'}"
>
  <p>{progressValue >= 100
    ? 'Press anywhere'
    : 'loading'}</p>
  <br />
  <div
    bind:this={progressBarElement}
    class="pulse-on-full-percentage__progress-bar-wrapper"
  >
    <hr
      class="pulse-on-full-percentage__progress-bar {progressValue >= 100 && 'pulse'}"
    />
  </div>
  <br />
  <h2 bind:this={progressValueElement} class="pulse-on-full-percentage__progress">
    {Math.floor(progressValue - 1)}%
  </h2>
</div>

<style type="scss">
  @import "./pulse-on-full-percentage.scss";
</style>
