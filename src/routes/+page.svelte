<script>
import start, { game, id } from '../stores';
import { onMount } from 'svelte';
let lobbies = [];
let name;
let show = false;
let ID = id.id;

function check () {
    fetch('https://api.hop.io/v1/channels', {
        headers: { "Authorization": "ptk_c19kOTdhZDEzMDRiYjg4MTk2YWU4NmE4ZmNhM2NiMzE3YV81MDUyODMxMDUwNDEzNjkzMg"}
    })
    .then(res => res.json())
    .then((toy) =>{
        lobbies = toy.data.channels;
    })
}
async function newGame () {
    console.log('started');
    fetch('/api/new')
    .then(res => res.json())
    .then(data => {check()})
    .catch(err => alert(err))
    
}

function list() {
    setTimeout(function() {show = !show}, 5000)
}

</script>

<div on:load={check()} class="index">
    <h1>ViteType</h1>
    <h2>A typing race, except you give the text</h2>
    <h3> name: {name}</h3>
    {#if show}
    <h3> token: {ID}</h3>
    {/if}
    <input placeholder='Name' type="text" bind:value={name}>
    <button on:click|once={start} on:click={list}>new ID</button>
    <button on:click = {newGame}> Create New Game </button>
    <button on:click = {check}>Check channels</button>
     <div class="lobs">
        <ul>
            {#if lobbies.length == 0}
            <li>No lobbies, click "create new" to start a new game</li>
            {/if}
            {#each lobbies as lobby}
            <li>
                <a href={`/game/${lobby.id}`}>click to join lobby {lobby.id}</a>
            </li>
            {/each}
        </ul>
    </div>
</div>

<style>
</style>