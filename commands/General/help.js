const simplydjs = require('simply-djs');
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js")
const { button, MessageButton, MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');
const disbut = require("discord-buttons");
 
    let embed1 = new Discord.MessageEmbed()
      .setTitle('**Start Help <a:purpleflyinghearts:854121476134535188>**')
      .setDescription('<a:tealverify:877471156221923338> **RSU.**')
      .setColor("#f4c2c2")
      .addField("<:pinkdot:884750198990045216> COMMAND CATEGORIES",
        "<a:version:883111864568021072> MODERATION\n<:general:883112189949542461>  GENERAL\n<a:Giveaway:881130673782534165> GIVEAWAY\n<:setting:883111797207490560> INFO\n<:avatar:883112453368610876> IMAGE\n<:fun:883112388608544778> FUN\n")
      .setThumbnail("https://i.imgur.com/sudaOcE.gif")
      .setImage('https://i.imgur.com/sudaOcE.gif')
      .setFooter('Miya25')
    let embed2 = new Discord.MessageEmbed()
      .setTitle('**Moderation Help <a:purpleflyinghearts:854121476134535188>**')
      .setDescription('<a:tealverify:877471156221923338> **RSU.**')
      .setColor("#f4c2c2")
      .addField(
        "<a:version:883111864568021072> MODERATION",
        "`ban` `unban` `kick` `addemoji` `addrole` `removerole` `announce` `.` `.` `purge` `slowmode` `mute` `unmute` `purge-channel`")
      .setThumbnail("https://i.imgur.com/sudaOcE.gif")
      .setImage('https://i.imgur.com/sudaOcE.gif')
      .setFooter('Miya25')
    let embed3 = new Discord.MessageEmbed()
      .setTitle('**General Help <a:purpleflyinghearts:854121476134535188>**')
      .setDescription('<a:tealverify:877471156221923338> **RSU.**')
      .setColor("#f4c2c2")
      .addField(
        "<:general:883112189949542461> GENERAL",
        "`servericon` `calculator` `invite` `membercount` `help` `serverinfo` `leaderboard` `snipe` `embed`")
      .setThumbnail("https://i.imgur.com/sudaOcE.gif")
      .setImage('https://i.imgur.com/sudaOcE.gif')
      .setFooter('Miya25')
    let embed4 = new Discord.MessageEmbed()
      .setTitle('**Giveaway Help <a:purpleflyinghearts:854121476134535188>**')
      .setDescription('<a:tealverify:877471156221923338> **RSU.**')
      .setColor("#f4c2c2")
      .addField(
        "<a:Giveaway:881130673782534165> GIVEAWAY",
        "`gcreate` `gstart` `gend` `greroll`")
      .setThumbnail("https://i.imgur.com/sudaOcE.gif")
      .setImage('https://i.imgur.com/sudaOcE.gif')
      .setFooter('Miya25')
    let embed5 = new Discord.MessageEmbed()
      .setTitle('**Info Help <a:purpleflyinghearts:854121476134535188>**')
      .setDescription('<a:tealverify:877471156221923338> **RSU.**')
      .setColor("#f4c2c2")
      .addField(
        "<:setting:883111797207490560> INFO",
        "`avatar` `help` `position` `urban` `weather` `status` `channelinfo` `rolememberinfo`")
      .setThumbnail("https://i.imgur.com/sudaOcE.gif")
      .setImage('https://i.imgur.com/sudaOcE.gif')
      .setFooter('Miya25')
    let embed6 = new Discord.MessageEmbed()
      .setTitle('**Image Help <a:purpleflyinghearts:854121476134535188>**')
      .setDescription('<a:tealverify:877471156221923338> **RSU.**')
      .setColor("#f4c2c2")
      .addField(
        "<:avatar:883112453368610876> Image",
        " `deepfry` `eject` `meme` `kangaroo` `dog` `cat` `changemymind` `fire` `respect` `scary`")
      .setThumbnail("https://i.imgur.com/sudaOcE.gif")
      .setImage('https://i.imgur.com/sudaOcE.gif')
      .setFooter('Miya25')
    let embed7 = new Discord.MessageEmbed()
       .setTitle('**Fun Help <a:purpleflyinghearts:854121476134535188>**')
      .setDescription('<a:tealverify:877471156221923338> **rsu is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<:fun:883112388608544778> FUN",
        "`fight` `rps` `coinflip` `meme` `reverse` `hangman` `trivia` `fact` `Shuffle-guess`")
      .setThumbnail("https://i.imgur.com/sudaOcE.gif")
      .setImage('https://i.imgur.com/sudaOcE.gif')
      .setFooter('Miya25')
    let embed8 = new Discord.MessageEmbed()
    .setTitle('**Uptim Help <a:purpleflyinghearts:854121476134535188>**')
      .setDescription('<a:tealverify:877471156221923338> **rsu  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<:UPLogo:883111725988212787> UPTIMER",
        "`add` `calc` `stats` `total` `ping` `projects` `remove`")
      .setThumbnail("https://i.imgur.com/sudaOcE.gif")
      .setImage('https://i.imgur.com/sudaOcE.gif')
      .setFooter('Miya25')

    

module.exports = {
  name: "help",
  aliases: [""],
  usage: "unban",
  description: "unbans member",


  run: async (client, message, args) => {
    let cmduser = message.author;
    let menuoptions = [
       {
        value: "BACK TO START", description: "Starting Menu!",
        replymsg: embed1, emoji: "854121476134535188" //optional
      },{
        value: "MODERATION", description: "Moderation Commands!",
        replymsg: embed2, emoji: "883111864568021072" //optional
      }, {
        value: "GENERAL", description: "General Commands!",
        replymsg: embed3, emoji: "883112189949542461" //optional
      }, {
        value: "GIVEAWAY", description: "Giveaway Commands!",
        replymsg: embed4, emoji: "881130673782534165" //optional
      }, {
        value: "INFO", description: "Information Commands!",
        replymsg: embed5, emoji: "883111797207490560" //optional
      }, {
        value: "IMAGE", description: "Image Commands!",
        replymsg: embed6, emoji: "883112453368610876" //optional
      }, {
        value: "FUN", description: "Fun Commands!",
        replymsg: embed7, emoji: "883112388608544778" //optional
      }, {
        value: "Uptimer", description: "Uptime Commands!",
        replymsg: embed8, emoji: "883111725988212787" //optional  
      }//optional
        ]
   // define the selection
    let Selection = new MessageMenu()
      .setID('MenuSelection')
      .setMaxValues(1) //OPTIONAL, this is how many values you can have at each selection
      .setMinValues(1) //OPTIONAL , this is how many values you need to have at each selection
      .setPlaceholder('Click me to make a Selection!');  //message in the content placeholder
    menuoptions.forEach(option => {
      let row = new MessageMenuOption()
        .setLabel(option.label ? option.label : option.value)
        .setValue(option.value)
        .setDescription(option.description)
        .setDefault()
      if (option.emoji) row.setEmoji(option.emoji)
      Selection.addOption(row)
    })
    //define the embed
   
    let MenuEmbed = new Discord.MessageEmbed()
      .setTitle('**<:help:883112023293038593> Help Panel <:help:883112023293038593>**')
      .setDescription(` Hello **${message.author.username}**, \n *Choose an category below to see commands* \n\n :question: New to RanveerSoniUtlity?, Check our server \n https://discord.gg/8mUPhh3KuV \n\n Also Check our <@886969406532513793> by: <@787241442770419722>`)
      .setColor("#f4c2c2")
      .addField("<a:yes:883112081614852156> COMMAND CATEGORIES:",
        "<a:version:883111864568021072> MODERATION\n<:general:883112189949542461> GENERAL\n<a:Giveaway:881130673782534165> GIVEAWAY\n<:setting:883111797207490560> INFO\n<:avatar:883112453368610876> IMAGE\n<:fun:883112388608544778> FUN\n<:UPLogo:883111725988212787> UPTIMER ")

      .setImage('https://i.imgur.com/sudaOcE.gif')
      .setThumbnail(client.user.displayAvatarURL())
     
      .setFooter('RanveerSoni')


    
    //send the menu msg
    let menumsg = await message.channel.send(MenuEmbed, Selection                        )
    //function to handle the menuselection
    function menuselection(menu) {
      let menuoptiondata = menuoptions.find(v => v.value == menu.values[0])
      menu.reply.send(menuoptiondata.replymsg, true,);
    }
    //Event
    client.on('clickMenu', (menu) => {
      if (menu.message.id === menumsg.id) {
        if (menu.clicker.user.id === cmduser.id) menuselection(menu);
        else menu.reply.send(`:x: You are not allowed to do that! Only: <@${cmduser.id}>`, true);
      }
    });
  }
}
