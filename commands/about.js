const Discord = require("discord.js");

client.on('message', msg => {
 if (msg.content === 'about') {
 msg.reply('First line of code written on: 6/17/20.');
 }
 });
