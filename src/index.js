import {client} from './core';
import commands from './commands';

client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const {commandName} = interaction;

    switch (commandName) {
        case 'ping':
            commands.ping(interaction);
        case 'weather':
            commands.ping(interaction);
    }
});
