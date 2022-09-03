import { error } from '@sveltejs/kit';
import { Hop, ChannelType } from '@onehop/js';

    // Export Hop SDK instance
const token = 'ptk_c19kOTdhZDEzMDRiYjg4MTk2YWU4NmE4ZmNhM2NiMzE3YV81MDUyODMxMDUwNDEzNjkzMg';
export const hop = new Hop(token);

export async function GET(){

    const channel = await hop.channels.create(
        // Channel Type; either: "unprotected", "public", or "private"
        ChannelType.PRIVATE,
        // Channel ID; leave this field as null if you want an auto-generated ID
        ""
    );

    return new Response(JSON.stringify({
        status: 200,
        text: 'lmfao'
    }))
}

