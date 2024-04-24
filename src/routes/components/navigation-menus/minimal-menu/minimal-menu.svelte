<script lang="ts">
  export let isMenuOpen: boolean;
  export let navigationMenu = {
    "Home": "/",
    "About Us": "#about",
    "Services": "#contact"
  };
</script>

<nav class="minimal-menu {isMenuOpen ? '' : 'hide-on-minimal-menu-open'}">
  <ul class="minimal-menu__list">
    {#each Object.entries(navigationMenu) as navigationOption}
        <li class="minimal-menu__list-item">
            <a class="minimal-menu__anchor" href={navigationOption[1]}><p>{navigationOption[0]}</p></a>
        </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
    @import "./minimal-menu.scss";
</style>
