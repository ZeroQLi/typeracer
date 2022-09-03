import { Hop, ChannelType } from '@onehop/js';

const token = 'ptk_c19kOTdhZDEzMDRiYjg4MTk2YWU4NmE4ZmNhM2NiMzE3YV81MDUyODMxMDUwNDEzNjkzMg';
const hop = new Hop(token);

async function test() {const channel = await hop.channels.create(
        // Channel Type; either: "unprotected", "public", or "private"
        ChannelType.PRIVATE,
        // Channel ID; leave this field as null if you want an auto-generated ID
        ""
);}

console.log(test());
