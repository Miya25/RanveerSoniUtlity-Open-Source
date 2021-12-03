const Discord = require('discord.js')
const webhook1 = new Discord.WebhookClient('914344899384594473', '6sqjY883-W8lL8c1KCkaX0bqwVvC7o3GJNo_9yEsC_bZwnjcHKuCt-BKONgE7i3vEqpq') //dont change this one
module.exports = {
  name: "bug-report",
  description: "bugreport command",
  aliases: ['bugreport'],

  async run(bot, message, args) {

    if (!args[0]) return message.reply('Please add a bug to report!')

    message.reply(`✉ | ${message.author.username}, Thanks for reporting the bugs! :)`)

    const bugReportEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) Bug:`)
      .setDescription(`${args}`)
      .addField("On the server:", `${message.guild.name}`)
      .addField("Server ID:", `${message.guild.id}`)

    webhook1.send(bugReportEmbed)


  }
}