const Discord = require("discord.js")

Client.on('message', msg => {
 if (msg.content === 'isaiah') {
 msg.reply('You called?');
 }
 });
