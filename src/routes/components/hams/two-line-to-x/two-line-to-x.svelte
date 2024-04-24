<script lang="ts">
    type OnChangeCallback = (isChecked: boolean) => void;

    export let onChange: OnChangeCallback;
    let inputElement: HTMLInputElement;
</script>

<input bind:this={inputElement} on:change={() => {
    onChange(inputElement.checked);
}} class="two-line-to-x-ham-trigger" type="checkbox" />

<style lang="scss">
    @import "./two-line-to-x.scss";
</style>