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

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.login(process.env.token);

require("dotenv").config()
// ...
client.on("guildMemberAdd", member => {
  member.send(
    `Welcome to Isaiah Incorporatations, We wish you enjoy stay (because you wont be leaving)`
  )
})
client.login(process.BOT_TOKEN)

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


client.on('message', msg => {
 if (msg.content === 'isaiah') {
 msg.reply('You called?');
 }
 });
