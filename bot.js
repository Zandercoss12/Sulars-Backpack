const Discord = require('discord.js');
const client = new Discord.Client();

var supersuit = [
  "https://tenor.com/xsfp.gif",
  "https://tenor.com/Ew24.gif",
  "https://tenor.com/N0eT.gif",
  "https://tenor.com/Ew24.gif"
];

client.on('ready', () => {
  client.user.setPresence({game: {name: "Honey, where's my super suit?", type: 0}});
  console.log('I am ready!');
});

client.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "general").sendMessage(member.toString() + " where's my super suit?!");
  
  member.addRole(member.guild.roles.find("name", "Member"));
});

client.on("message", async message => {
  if (msg.content === 'Honey, where is my super suit?') {
    message.reply(supersuit[Math.floor(Math.random() * supersuit.length)]);
  }
});

setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;



client.login(process.env.BOT_TOKEN);
