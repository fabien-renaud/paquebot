import {REST} from '@discordjs/rest';
import {Routes} from 'discord-api-types/v9';
import {OPTION_TYPES} from '../constants';
import ping from './ping';
import weather from './weather';

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
        description: 'Replies weather of the given city',
        options: [
            {
                name: 'city',
                description: 'Name of the city',
                type: OPTION_TYPES.STRING,
                required: true
            }
        ],
        handler: weather
    }
];

// Register commands to Discord API
const rest = new REST({version: '9'}).setToken(token);
rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commands})
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);

export default commands;
