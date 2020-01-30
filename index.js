const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const exampleEmbed = new Discord.RichEmbed()
	.setColor('#ff3030')
	.setTitle('Need Help? Contact Us!')
	.setDescription('Message our **ModMail** bot for further assistance, and we will get back to you as soon as we can. Have a pleasant stay here at **Neon Rewards** | **Club**!')
	.setImage('https://cdn.discordapp.com/attachments/671916220609724436/672302302161534996/unknown.png')
	.setFooter('Server Roles')
	.setTimestamp()


client.on("message", (message) => {
  if (message.content.startsWith("!embed")) {
    message.delete()
    message.channel.send(exampleEmbed);
    
  }
});


client.login('NjcxODc5MzEzODUwNzYxMjE2.XjInqw.jSCzR3Mt0PurWzc4Qg0H3kHyPeU')

/*const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Regular field title', 'Some value here')
	.addBlankField()
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

channel.send(exampleEmbed);*/

//Main Embed Color - #00aeff
//Middle Embed Color - #e5ff00
