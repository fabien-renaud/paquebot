import ping from './ping';
import {SlashCommandBuilder} from '@discordjs/builders';
import {REST} from '@discordjs/rest';
import {Routes} from 'discord-api-types/v9';

const {CLIENT_ID: clientId, GUILD_ID: guildId, DISCORD_TOKEN: token} = process.env;

// The following array contains every commands of the bot.
const commands = [
    {
        name: 'ping',
        description: 'Replies with pong!',
        handler: ping
    },
    {
        name: 'weather',
        description: 'Replies with weather',
        handler: ping
    }
];

// Clone commands and format it to Discord API
const formatToDiscordAPI = (command) => new SlashCommandBuilder().setName(command.name).setDescription(command.description).toJSON();
const commandsToRegister = commands.map(formatToDiscordAPI);

// Register commands to Discord API
const rest = new REST({version: '9'}).setToken(token);
rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commandsToRegister})
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);

// Clone commands and format it to export
const formatToExport = (concat, command) => ({...concat, [command.name]: command.handler});
const exportedCommands = commands.reduce(formatToExport, {});

export default exportedCommands;
