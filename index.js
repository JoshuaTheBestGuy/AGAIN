// Nerd Stuff

require("dotenv").config()
const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()
const botsettings = require('./botsettings.json');

require("./util/eventHandler")

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        });
    });
});

client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.login(process.env.token);

// Welcome and Leave
client.on("guildMemberAdd", member => {

const welcomechannel = member.guild.channels.cache.get('715639424989528226');
    welcomechannel.send (`Welcome to Isaiah Incorporatations ${member}, We wish you enjoy stay (because you wont be leaving)`)
});

client.on("guildMemberRemove", member => {
const leavechannel = member.guild.channels.cache.get('715639460091527179');
    leavechannel.send (`Come on ${member} why did you have to leave?`)
});

client.login(process.BOT_TOKEN)
