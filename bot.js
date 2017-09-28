const Discord = require('discord.js');
var prefix = "-+";
const client = new Discord.Client();

var fortunes = [
  "**ZanderBot says**\n```css\nYes```",
  "**ZanderBot says**\n```fix\nNo```",
  "**ZanderBot says**\n```fix\nhm? Did you say something?```",
  "**ZanderBot says**\n```css\nYes```",
  "**ZanderBot says**\n```fix\nNo```",
  "**ZanderBot says**\n```fix\nU dumb```",
  "**ZanderBot says**\n```css\nMaybe so...```",
  "**ZanderBot says**\n```fix\nI do not think so.```",
  "**ZanderBot says**\n```css\nThe world may never know...```",
  "**ZanderBot says**\n```fix\nNever in a million years.```"
];


client.on('ready', () => {
  client.user.setPresence({game: {name: "-+help", type: 0}});
  console.log('I am ready!');
});

client.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "general").sendMessage(member.toString() + " Welcome taco brethren!");
  
  member.addRole(member.guild.roles.find("name", "Member"));
});

client.on("message", async message => {
  if(message.author.client) return;
  if(message.content.indexOf(prefix) !== 0) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }

  if(command === "purgescreen") {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 1 || deleteCount > 1)
    return message.reply("Do -+purgescreen 1 and it\'ll delete everything onscreen.");
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkdelete(fetched)
    .catch(error => message.reply("Couldn\'t delete messages because of: ${error}"));
  }

  if(command === "tacos") {
    message.channel.sendMessage("```fix\nTACOS R DA BEST```");
  }

  if(command === "8ball") {
     if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else message.channel.sendMessage("```diff\n- I do not understand```");
  }

  if(command === "info") {
    var embed = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .addField("What I am", "I am a bot created by: Zandercros12!", true)
      .addField("This is you ------------>", "lel", true)
      .addField("What I do", "Random Stuff? I guess.")
      .addField("Am I a good bot?", "no")
      .setColor(0x00FFFF)
    message.channel.sendEmbed(embed);
  }

  if(command === "help") {
    message.author.sendMessage("```md\n|--------<Commands>--------|\n[1]: help - gives you help menu (this one).\n[2]: 8ball <message> - Replies \"yes\" or \"no\" in response to your question.\n[3]: info - information about the bot.\n[4]: tacos,\n[5]: dumbinfo - gives dumb information that may or may not be helpful.\n[6]: purgescreen 1 - deletes all the text on screen.\n[7]: say <message> - says what the player tells the bot to say.\n[8]: apply - Survey just for fun, you don\'t apply to anything.\n|--------<Commands>-------|``` **Always start your commands with -+**");
    message.channel.sendMessage("**I just messaged you the commands, go check your direct messages!**");
  }


  if(command === "apply") {
    message.channel.sendMessage("**https://goo.gl/forms/bA35MvXEeP0o3z6z1 \n**Click this link to have fun answering a survey and stuff!**");
  }
});

client.login(process.env.BOT_TOKEN);

