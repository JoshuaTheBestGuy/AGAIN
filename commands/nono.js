const Discord = require("discord.js");
const client = new Discord.Client()

client.on('message', msg => {
 if (msg.content === 'no no') {
 msg.reply('dont touch me there');
 }
 });
