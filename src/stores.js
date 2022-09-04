import { writable } from 'svelte/store'
import { Hop } from '@onehop/js';

const token = 'ptk_c19kOTdhZDEzMDRiYjg4MTk2YWU4NmE4ZmNhM2NiMzE3YV81MDUyODMxMDUwNDEzNjkzMg';
export const game = new Hop(token);


export let id = '';
export default async function start() {
    id = await game.channels.tokens.create();
}

