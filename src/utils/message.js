const createEmbedMessage = ({author, title, description, color, url, fields}) => {
    return {
        embeds: [
            {
                author: author && {
                    name: `${author?.username}'s`,
                    iconURL: author?.displayAvatarURL(),
                    url: `https://discord.com/channels/@me/${author?.id}`
                },
                color,
                description,
                fields,
                title,
                thumbnail: author && {
                    url: author?.displayAvatarURL()
                },
                url
            }
        ]
    };
};

export default {createEmbedMessage};
