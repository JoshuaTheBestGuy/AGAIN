const Discord = require("discord.js");
const client = new Discord.Client()

client.on('message', msg => {
 if (msg.content === 'about') {
 msg.reply('First line of code written on: 6/17/20.');
 }
 });

 module.exports.config = {
     name: "about",
     aliases: [""]
 }
