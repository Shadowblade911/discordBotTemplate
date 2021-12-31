import * as dotenv from 'dotenv';
import {Client as DiscordClient, Intents } from 'discord.js';
import * as _  from 'lodash';

dotenv.config({path: __dirname+'/.env'});

const client = new DiscordClient({
    intents: [
        Intents.FLAGS.DIRECT_MESSAGES, 
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.login(process.env.DISCORD_BOT_TOKEN);

const prefixes = ["!mobboss", "!mb"];


client.on("messageCreate", function(message){
    if(message.author.bot){
        return;
    }

    const content = message.content;

    const doesStartWithPrefix = _.some(prefixes, (prefix) => {
        return content.toLocaleLowerCase().startsWith(prefix);
    });

    if(!doesStartWithPrefix){
        return;
    }

    message.channel.send("I'll make you an offer you can't refuse.");
})

