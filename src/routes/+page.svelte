<script lang="ts">
  // .

  import LoadingScreen from "./components/loading-screens/pulse-on-full-percentage/pulse-on-full-percentage.svelte";
  import playVideo from "./scripts/play-video";
  import { setScrollingEffects } from "./scripts/scrolling-effects";

  // .

  let heroBannerVideo: HTMLVideoElement;
  let gridVideos: HTMLVideoElement[] = [];

  import { onMount } from "svelte";
  import {
    changeHeightOnScroll,
    changeOpacityOnScroll,
    changePositionOnScroll,
    changeSkewOnScroll,
  } from "./scripts/scrolling-effects/effects";
  import TwoLineToX from "./components/hams/two-line-to-x/two-line-to-x.svelte";
  import MinimalMenu from "./components/navigation-menus/minimal-menu/minimal-menu.svelte";

  const SA: HTMLElement[] = [];
  const SB: HTMLElement[] = [];
  const SC: HTMLElement[] = [];

  onMount(() => {
    setEffects();
  });

  function setEffects() {
    setScrollingEffects(SA, [changeOpacityOnScroll, changePositionOnScroll]);
    setScrollingEffects(SB, [changeOpacityOnScroll]);
    setScrollingEffects(SC, [
      changeOpacityOnScroll,
      changeSkewOnScroll,
      changePositionOnScroll,
    ]);
    setScrollingEffects(gridVideos, [changeHeightOnScroll]);
  }

  // .

  // onMount(() => {
  //   let oldV: number = window.scrollY;
  //   let currentV: number;
  //   let scrollDirection: number = 0;

  //   let peakAcceleration = 100; // other than 0
  //   // Adjust this value to control the acceleration
  //   let accelerationFactor = 0;

  //   (function frame() {
  //     currentV = window.scrollY;
  //     // console.log("accelerationFactor", accelerationFactor);

  //     if (accelerationFactor === 0) {
  //       if (oldV - currentV) {
  //         oldV = currentV;

  //         // console.log("oldV - currentV", oldV - currentV);

  //         requestAnimationFrame(frame);

  //         return;
  //       }

  //       accelerationFactor = peakAcceleration;

  //       requestAnimationFrame(frame);

  //       return;
  //     }

  //     scrollDirection = Math.sign(currentV - oldV);

  //     const decimalToZeroScaleSnap = 70;
  //     accelerationFactor = Math.floor((accelerationFactor / 1.1 ) * decimalToZeroScaleSnap) / decimalToZeroScaleSnap;

  //     window.scrollTo(0, currentV + accelerationFactor * scrollDirection);

  //     requestAnimationFrame(frame);
  //   })();
  // });

  let isMenuOpen = false;

  let progressValue: number;
  let hasLoadingHadInteraction: boolean;
</script>

<svelte:window
  on:mouseover={() => {
    [...gridVideos, heroBannerVideo].forEach((video) => {
      playVideo(video)();
    });
  }}
/>

<TwoLineToX
  onChange={(value) => {
    isMenuOpen = value;
  }}
/>

<MinimalMenu {isMenuOpen} />

<LoadingScreen {progressValue} {hasLoadingHadInteraction} />

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<main
  class="visible-when-ready squishable {progressValue >= 100 &&
    hasLoadingHadInteraction &&
    'show'} {isMenuOpen && 'squish-on-open-minimal-menu'}"
>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video
    loop
    bind:this={heroBannerVideo}
    class="hero-banner-video {isMenuOpen ? 'squish-on-open-minimal-zmenu' : ''}"
    src="/videos/7946009-uhd_1440_2732_30fps.mp4"
  ></video>

  <div class="hero-container">
    <h1>
      <div bind:this={SA[SA.length]}>soft</div>
      <div bind:this={SA[SA.length]}>smooth</div>
      <div bind:this={SA[SA.length]}>& tasty</div>
    </h1>

    <h2 bind:this={SB[SB.length]}>Libre Baskervile</h2>
  </div>

  <div class="body-container bg" id="about">
    <div class="container grid-2">
      <div class="info">
        <h3 bind:this={SA[SA.length]}>
          Nihil ullam id explicabo aperiam voluptas
        </h3>
        <p bind:this={SB[SB.length]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum
          eveniet similique nihil ullam id explicabo aperiam voluptas. A,
          dolorum itaque minus deleniti facilis rerum suscipit fugiat distinctio
          ipsam recusandae.
        </p>
      </div>
      <!-- svelte-ignore a11y-media-has-caption -->
      <div bind:this={SA[SA.length]} class="video-container">
        <video
          loop
          bind:this={gridVideos[0]}
          class="grid-video"
          src="/videos/5353260-hd_1080_1920_25fps.mp4"
        ></video>
      </div>
    </div>
    <div class="container grid-2">
      <!-- svelte-ignore a11y-media-has-caption -->
      <div bind:this={SA[SA.length]} class="video-container">
        <video
          loop
          bind:this={gridVideos[1]}
          class="grid-video"
          src="/videos/5353381-hd_1080_1920_25fps.mp4"
        ></video>
      </div>
      <div class="info">
        <h3 bind:this={SA[SA.length]}>Adipisicing elit earum!</h3>
        <p bind:this={SB[SB.length]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          corrupti nam placeat excepturi molestiae minus, autem cumque amet
          repellendus quia, sint deleniti nostrum eligendi dolores,
          necessitatibus soluta eum dicta aliquid.
          <br /><br />
          Soluta doloribus, numquam perspiciatis unde debitis vel eveniet reiciendis
          autem reprehenderit quia est cumque? Sed veritatis velit impedit dolorem
          aliquid unde ducimus atque tempore amet voluptas, modi labore magnam. Aut.
        </p>
      </div>
    </div>
    <div class="container grid-2">
      <div class="info">
        <h3 bind:this={SA[SA.length]}>Distinctio ipsam recusandae</h3>
        <p bind:this={SB[SB.length]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          possimus perspiciatis totam, laudantium officia doloremque eligendi
          voluptate beatae deserunt dicta enim autem cum hic quod delectus
          recusandae excepturi laborum nam?
          <br /><br />
          Sapiente totam porro architecto assumenda. Facere ducimus enim eum eaque
          ipsa cupiditate, molestias quia qui praesentium dolorum iusto pariatur
          vitae molestiae at quos, totam id ad nobis magnam. Similique, et!
          <br /><br />
          Quod temporibus reprehenderit sapiente eum ex, ut harum quia distinctio
          similique sunt omnis, unde eius. Tempore debitis laborum natus alias, quo
          laboriosam vero libero praesentium beatae rem reiciendis, repellat blanditiis.
          <br /><br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero soluta in,
          dolores quam fugit temporibus! Quaerat fuga inventore dolore laudantium
          nostrum, consequatur, explicabo consectetur veritatis alias optio nemo
          animi tempora?
          <br /><br />
          Culpa voluptatem ea quae doloribus, temporibus a fuga quo! Nisi neque numquam
          nulla suscipit architecto quod aliquam praesentium culpa minima tempora,
          odio qui eveniet delectus aperiam magnam quisquam! Accusantium, nemo.
        </p>
      </div>
      <!-- svelte-ignore a11y-media-has-caption -->
      <div bind:this={SA[SA.length]} class="video-container">
        <video
          loop
          bind:this={gridVideos[2]}
          class="grid-video"
          src="/videos/5353382-hd_1080_1920_25fps.mp4"
        ></video>
      </div>
    </div>
  </div>

  <footer id="contact">
    <h3 bind:this={SC[SC.length]}>Contact us:</h3>
    <hr />
    <div class="contact-info">
      <div class="contact-info__info">
        <p bind:this={SC[SC.length]}>
          <b>Email:</b> <a href="mailto:info@example.com">info@example.com</a>
        </p>
        <p bind:this={SC[SC.length]}><b>Phone:</b> +1 (123) 456-7890</p>
      </div>
      <div class="contact-info__info">
        <p bind:this={SC[SC.length]}>
          &copy; 2024 My Website. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</main>

<style type="scss">
  @import "./styles/reset.scss";
  @import "./styles/global.scss";
</style>
