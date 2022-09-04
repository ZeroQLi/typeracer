import { error } from '@sveltejs/kit';
import { ChannelType } from '@onehop/js';
import { game } from '../../../stores';
// Export Hop SDK instance

export async function GET() {

    const channel = await game.channels.create(
        // Channel Type; either: "unprotected", "public", or "private"
        ChannelType.PUBLIC,
        // Channel ID; leave this field as null if you want an auto-generated ID
        "", {
        state: {
            name: "circuit",
            value: "Start"
        }
    }
    );

    return new Response(JSON.stringify({
        status: 200,
        text: 'lmfao'
    }))
}