const { getPrisma } = require("../utils/prismaConnector");
require("dotenv").config();

const prisma = getPrisma()

const channelId = process.env.CHANNEL_ID

module.exports = async function reactionAdded({ event, client, body, say, logger }) {
 const user = event.user
 const channel = event.item.channel
 const thread_ts = event.item.ts

 if (event.channel === channelId ) {
    console.log(`reaction added in ${channel}`)
 }

 await client.chat.postMessage({
    channel: event.item.channel,
    text:`<@${event.user}>`,
    thread_ts: event.item.ts
 })

}
