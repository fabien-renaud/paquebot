import {Client, Intents} from 'discord.js';
import {SlashCommandBuilder} from '@discordjs/builders';
import {REST} from '@discordjs/rest';
import {Routes} from 'discord-api-types/v9';

const {CLIENT_ID: clientId, GUILD_ID: guildId, DISCORD_TOKEN: token} = process.env;

/* Register commands
======================================================================================================================*/

// List every commands
const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
    new SlashCommandBuilder().setName('user').setDescription('Replies with user info!')
].map((command) => command.toJSON());

// Instantiate REST client
const rest = new REST({version: '9'}).setToken(token);

// Send HTTP PUT request to Discord API to register commands
rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commands})
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);

/* Instantiate client
======================================================================================================================*/

// Create a new client instance
const client = new Client({intents: [Intents.FLAGS.GUILDS]});

// Login to Discord with your client's token
client.login(token);

export {client};
