import weatherService from '../service/weather';
import {messageUtils} from '../utils';

const weather = async (interaction) => {
    const city = interaction.options.data.find((option) => option.name === 'city').value;
    const weatherData = await weatherService.getWeatherData(city);
    interaction.reply(messageUtils.createEmbedMessage({
        title: `Météo de ${city}`,
        fields: weatherData.map((data) => ({
            name: data.time,
            value: `${data.label} (${data.temperature} °C)`,
            inline: true
        }))
    }));
};

export default weather;
