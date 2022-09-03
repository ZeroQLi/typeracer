<script>
let name = '';
let test;
const newGame = () => {}
</script>

<div class="index">
    <h1>TypeVite</h1>
    <h2>A typing race, except you give the text</h2>
    <input placeholder='Name' type="text" bind:value={name}>
    <button on:click = { () => {newGame}}> Create New Game </button>
</div>

<style>
</style>