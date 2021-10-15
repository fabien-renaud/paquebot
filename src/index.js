import {client} from './core';
import commands from './commands';

client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    commands.find((command) => command.name === interaction.commandName)?.handler(interaction);
});
