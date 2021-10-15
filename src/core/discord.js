import {Client, Intents} from 'discord.js';
const {DISCORD_TOKEN: token} = process.env;

// Create a new client instance
export const client = new Client({intents: [Intents.FLAGS.GUILDS]});

// Login to Discord with your client's token
client.login(token);
