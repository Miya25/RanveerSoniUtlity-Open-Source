
const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
 name: "invite",
 aliases: ["info"],
 description: "Shows all commands of the bot",

 run: async (client, message, args) => {
 
let helpEmbed = new MessageEmbed()
 .setDescription(`<a:tealverify:877471156221923338> **MilfSupremacy  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**`)
 .setThumbnail("https://cdn.discordapp.com/avatars/908827177917751307/ff8a379838839a1c3e2bc13dd9d233d5.webp?size=512")
 .setImage("https://i.imgur.com/WldUlH2.gif")
 .setFooter("Click on these buttons to invite me!")
 .setColor("#FFFFF0")


 let button1 = new disbut.MessageButton()
 .setStyle('url')
 .setLabel('Invite Me') 
 .setURL("https://www.milfsupremacy.tk/invite");

 let button2 = new disbut.MessageButton()
 .setStyle('url')
 .setLabel('Website') 
 .setURL("https://www.milfsupremacy.tk");

let button3 = new
disbut.MessageButton()
.setStyle('url')
.setLabel('Support Server')
   .setURL('https://www.milfsupremacy.tk/support')
return message.channel.send(helpEmbed,{
 button: [button1,button2,button3],
 });

 },
};

