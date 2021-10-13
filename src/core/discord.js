import {Client, Intents} from 'discord.js';
import {deployCommands} from './commands';

const {DISCORD_TOKEN: token} = process.env;

// Create a new client instance
const client = new Client({intents: [Intents.FLAGS.GUILDS]});

// Deploy Discord commands
deployCommands();

// Login to Discord with your client's token
client.login(token);

export {client};
