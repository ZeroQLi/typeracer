<script>
import { page } from '$app/stores';
import { id } from '../../../stores.js'
import { hop } from '@onehop/client';
import { game } from '../../../stores.js'; 
import { onMount } from 'svelte';
import { each } from 'svelte/internal';

let ID = id.id
let vis = true;
let visFinal = false;
let text;
let finalInput;
let lobby = $page.params.id
let elem = '';
let finalText;
    
onMount( async function () {
  console.log(ID);
  hop.init({
	projectId: "project_NDkxOTUwOTg0MTI1MTk1ODE", // replace with your project ID
  token: ID })
  game.channels.subscribeToken(lobby, ID)
})

function online () {
  return fetch(`https://api.hop.io/v1/channels/${lobby}/stats`, {
    headers: { "Authorization": "ptk_c19kOTdhZDEzMDRiYjg4MTk2YWU4NmE4ZmNhM2NiMzE3YV81MDUyODMxMDUwNDEzNjkzMg"}
  })
    .then(response => response.json())
    .then(channel => channel.data.stats.online_count)
}


async function checkOnline () {
  const tie = await online();
  return tie;
}

let timerId = setInterval(countdown, 1000);
let timeLeft = 10;

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    togVis(text);
  } else {
    elem = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}
function getFinal() {
  return fetch(`https://api.hop.io/v1/channels/${lobby}/state`, {
    headers: { "Authorization": "ptk_c19kOTdhZDEzMDRiYjg4MTk2YWU4NmE4ZmNhM2NiMzE3YV81MDUyODMxMDUwNDEzNjkzMg"}
  })
    .then(response => response.json())
    .then(channel => channel.data.state.value)
}

function togVis( text ){
  vis = !vis;
  let taste = getFinal()
  let bro = taste + text
  game.channels.patchState(lobby, {value: bro})
  setTimeout(final, 1000)
}

async function final() {
  finalText = await getFinal();
  visFinal = !visFinal;
}
$: if (!finalText && finalInput == finalText) {
  console.log(ID + ' won');
}

</script>

<div class="container">
  <div class="buckleUp">
    {#if vis}
    <h2> {elem} </h2>
    <textarea id="buckleInput" class="buckle-input" bind:value={text}></textarea>
    {/if}
  </div>
  <div class="keyDown">
    {#if visFinal}
      <h2> {finalText} </h2>
      <textarea class="key-input" bind:value={finalInput}></textarea>
    {/if}
  </div>
</div>

<style></style>

