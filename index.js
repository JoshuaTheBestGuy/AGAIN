// Nerd Stuff

require("dotenv").config()
const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()

require("./util/eventHandler")

fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
  const eventName = file.split(".")[0]
  })
})

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.login(process.env.token);

// Welcome and Leave
client.on("guildMemberAdd", member => {

const welcomechannel = client.channel.cache.get('715639424989528226');
    if (!welcomechannel) return;
    channel.send (`Welcome to Isaiah Incorporatations ${member}, We wish you enjoy stay (because you wont be leaving)`)
});

client.on("guildMemberRemove", member => {
const leavechannel = client.channel.cache.get('715639424989528226');
    if (!leavechannel) return;
    channel.send (`Come on ${member} why did you have to leave?`)
});

// Kicking

require("dotenv").config()
// ...
client.on("message", message => {
  if (message.content.startsWith("!kick")) {
    const member = message.mentions.members.first()
    if (!member) {
      return message.reply(
        `Who are you trying to kick? You must mention a user.`
      )
    }
    if (!member.kickable) {
      return message.reply(`I can't kick this user. Sorry!`)
    }
    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was kicked.`))
      .catch(error => message.reply(`Sorry, an error occured.`))
  }
})
// ...
client.login(process.BOT_TOKEN)

// Custom Commands Kinda

client.on('message', msg => {
 if (msg.content === 'isaiah') {
 msg.reply('You called?');
 }
 });

 client.on('message', msg => {
  if (msg.content === 'ping') {
  msg.reply('pong');
  }
  });

  client.on('message', msg => {
   if (msg.content === 'about') {
   msg.reply('First line of code written on: 6/17/20.');
   }
   });

   client.on('message', msg => {
    if (msg.content === 'no no') {
    msg.reply('dont touch me there');
    }
    });
