<script>

let name;
let test;
let lobbies = [];



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
    .then(data =>  test = data.status)
    .catch(err => alert(err))
    check()
}
</script>

<div on:load={check()} class="index">
    <h1>ViteType</h1>
    <h2>A typing race, except you give the text</h2>
    <input placeholder='Name' type="text" bind:value={name}>
    <button on:click = {newGame}> Create New Game </button>
    <button on:click = {check}>Check channels</button>
     <div class="lobs">
        <ul>
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