const Discord = require("discord.js");
const client = new Discord.Client()

client.on('message', msg => {
 if (msg.content === 'isaiah') {
 msg.reply('You called?');
 }
 });
