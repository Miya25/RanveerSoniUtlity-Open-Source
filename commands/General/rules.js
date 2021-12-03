
const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
 name: "rules",
 aliases: ["info"],
 description: "Shows all commands of the bot",

 run: async (client, message, args) => {
 
 if(message.author.id !== "801334443281219584") return message.channel.send("This command is only for bot owners.");

let helpEmbed = new MessageEmbed()
 
.setTitle('**RULES**')  .setDescription(`<:one1:914335403501322302> SPAMMING
<:pinkdot:884750198990045216> Spamming in any form is prohibited. Depending on the severity, a warn, mute, or ban will be issued.

<:two2:914335404054970378> RACISM,SLURS,SEXISM AND TOXICITY
<:pinkdot:884750198990045216> None of these are allowed, saying n word, posting NSFW content. If you do any of these, you will get permanent ban from this server and bot. Please don't be toxic to other members, and respect each other.

<:three3:914335404164005908> DISCORD TOS
<:pinkdot:884750198990045216> U must follow discord tos.
Read Discord rules here ==> https://discord.com/term

<:four4:914335403866210384> PINGING OR DMING DEVELOPERS
<:pinkdot:884750198990045216> PINGING DEVELOPER WILL RESULT IN A BAN.

<:five5:9143354035809894606> BEGGING
<:pinkdot:884750198990045216> Begging for anything is not allowed.

<:six6:914335403614556182> DM ADVERTISING
<:pinkdot:884750198990045216> Advertising a bot or server in private message without their permission is not allowed!

`)
 .setThumbnail(client.user.displayAvatarURL())
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

