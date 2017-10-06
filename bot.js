const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

// Variables //
var wall = [
	"https://tenor.com/view/donald-trump-wall-mexico-donald-wall-trump-gif-7202198",
	"https://tenor.com/view/donald-trump-wall-solution-illegal-immigration-mexico-gif-4968392",
	"https://tenor.com/view/trump-wall-businessman-donald-gif-5172528",
	"https://tenor.com/view/trump-trump-wall-gif-7230709",
	"https://tenor.com/view/elections-wall-trump-clinton-election-electiona-gif-7105455",
	"https://tenor.com/view/trump-donald-trump-build-awall-lets-build-awall-great-wall-of-china-gif-5619514",
	"https://orig00.deviantart.net/4857/f/2016/106/8/7/attack_on_trump_s_wall_by_capitalistguy-d9z40be.jpg",
	"https://i.imgflip.com/1vgxg5.jpg",
	"http://www.mypokecard.com/my/galery/hyGtyG01kmTh.jpg",
	"http://pm1.narvii.com/6084/e5c5e88137c9b5450a63851f9b10504b05b9673c_hq.jpg"
];

var memes = [
	"https://tenor.com/view/donald-trump-derp-gif-4833371",
	"https://tenor.com/view/donald-trump-really-oh-really-well-gif-7605661",
	"https://tenor.com/view/trump-dance-wiggle-leotard-face-edit-gif-4958416",
	"https://tenor.com/view/donald-trump-donaldtrump-bye-obama-gif-7555548",
	"https://tenor.com/view/wrong-donald-trump-gif-8471142",
	"https://tenor.com/view/trump-donald-trump-dance-thinking-idk-gif-5753267",
	"https://tenor.com/view/deneldtremp-deneld-lel-donald-trump-gif-5126134",
	"https://tenor.com/view/trump-sombrero-gif-5784650",
	"https://tenor.com/view/bye-donald-trump-gif-5648885",
	"https://tenor.com/view/trump-tard-mocking-crazy-gif-4740101",
	"https://media.tenor.com/images/3ff850ba2ca92fbd1e6e70c45c4d4e8f/tenor.gif",
	"https://tenor.com/view/donaldtrump-trump-dance-gif-4531450",
	"https://tenor.com/view/trump-transformation-bird-funny-gif-5980736",
	"https://tenor.com/view/trump-clinton-godzilla-fight-lol-gif-5735153",
	"https://tenor.com/view/donaldtrump-trump-angry-fish-gif-4531436",
	"https://tenor.com/view/president-donald-trump-draws-executive-gif-7866911",
	"https://tenor.com/view/trump-pope-trumpope-gif-8709177",
	"https://tenor.com/view/trump-manson-gif-7301999",
	"https://tenor.com/view/trump-sad-sad-day-gif-7870267",
	"https://tenor.com/view/president-donald-trump-executive-order-gif-7904210",
	"https://tenor.com/view/donald-trump-president-trump-white-house-press-conference-dance-dancing-gif-7808989",
	"https://tenor.com/view/president-donald-trump-draws-executive-gif-7877566",
	"https://cbsnews1.cbsistatic.com/hub/i/r/2017/02/10/3ebc5ba8-a46c-4bc3-82a2-d060a0445724/crop/455x459+0+0/resize/620x465/64360f0876156abd6bcf80fe487663a6/screen-shot-2017-02-10-at-1-56-56-pm.png",
	"https://cdn.pastemagazine.com/www/system/images/photo_albums/trump-memes/large/mxekeuk.png?1384968217",
	"https://factsempire.com/wp-content/uploads/2016/11/52.jpg",
	"https://static.pizzabottle.com/wp-content/uploads/2017/05/b052c14cc9b8c299507a412e9c24dcf5_-donald-trump-memes-and-trump-memes_540-244.jpeg",
	"http://i0.kym-cdn.com/photos/images/original/001/077/512/21c.jpg",
	"https://i.pinimg.com/736x/45/ba/99/45ba990dff5774ad83f889f925ba8877--memes-donald-trump-donald-trump-hair.jpg",
	"https://rekordnorth.co.za/wp-content/uploads/sites/86/2016/11/trump-meme-14.jpg",
	"http://www.telegraph.co.uk/content/dam/news/2017/02/01/Donald-Trump-draw-memes-xlarge_trans_NvBQzQNjv4BqpJliwavx4coWFCaEkEsb3kvxIt-lGGWCWqwLa_RXJU8.PNG",
	"https://static.boredpanda.com/blog/wp-content/uploads/2017/02/trump-executive-order-memes-5-58919d4088ef2__605.gif",
	"https://www.dailydot.com/wp-content/uploads/772/0b/trumpgenders.jpg",
	"https://i.amz.mshcdn.com/19BmfT0AGtWXKkt7Bw0a3J7IaIs=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F367863%2Fbd33f68b-dc93-43f1-95de-9a53d40bca41.jpg",
	"http://www.thehookmag.com/wp-content/uploads/2017/02/harambe.jpg",
	"https://nyoobserver.files.wordpress.com/2017/01/capture-345.png",
	"https://static.boredpanda.com/blog/wp-content/uploads/2017/02/trump-executive-order-memes-20-5891a7507891d__605.gif",
	"https://i.imgflip.com/1iddna.jpg",
	"http://i0.kym-cdn.com/photos/images/original/001/214/707/813.jpg",
	"http://i0.kym-cdn.com/photos/images/original/001/215/175/021.jpg",
	"http://i0.kym-cdn.com/photos/images/facebook/001/222/871/24e.png_large",
	"http://i0.kym-cdn.com/photos/images/facebook/001/215/208/2c8.jpg",
	"http://i0.kym-cdn.com/photos/images/original/001/214/698/4c8"
];
	
var fortunes = [
	"Yes, if you build a wall.",
	"No,",
	"It's not possible",
	"It might be possible.",
	"No - the wall isn't finished.",
	"Yes,",
	"Yes - the wall is finished.",
	"Can you ask again?"
];

client.on('ready', () => {
  client.user.setPresence({game: {name: "~Thelp for commands!", type: 0}});
  console.log('I am ready!');
});

client.on("guildMemberAdd", function(member) {
  member.addRole(member.guild.roles.find("name", "Member"));
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "info") {
  	var embed = new Discord.RichEmbed()
  	.setThumbnail(message.client.avatarURL)
  	.addField("What I am", "A bot.")
  	.addField("What I do", "Build Walls")
  	.addField("Am I a good bot?", "no")
  	.setColor(0x00FFFF)
  	message.channel.sendEmbed(embed);
  }

  if(command === "wall") {
  	message.channel.sendMessage(wall[Math.floor(Math.random() * wall.length)]);
  }

  if(command === "trumpmemes") {
  	message.channel.sendMessage(memes[Math.floor(Math.random() * memes.length)]);
  }

  if(command === "8ball") {
  	if (args[1]) message.channel.sendMessages(fortunes[Math.floor(Math.random() * fortunes.length)]);
  	else message.channel.sendMessage("```diff\n- I do not understand```");
  }

  setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

});


client.login(process.env.BOT_TOKEN);
