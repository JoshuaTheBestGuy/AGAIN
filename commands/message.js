const Discord = require("discord.js");
const client = new Discord.Client()

const kick = require("../commands/kick")
module.exports = (client, message) => {
  if (message.content.startsWith("!kick")) {
    return kick(message)
  }
}
