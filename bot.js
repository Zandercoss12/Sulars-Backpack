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

var facts = ["School is cool",
                                              "Tacos are the best!",
                                              "Everything I say is most-likely ~~not~~ true",
                                              "Burritos are bad",
                                              "U dumb",
                                              "Don\'t touch me!!!",
                                              "TACOZ",
                                              "Scientists have proven that buildings can\'t jump.",
                                              "A lethal dose is a lifetime supply.",
                                              "School is fun (in a million years)",
                                              "Music is enjoyable.",
                                              "My name is ZanderBot.",
                                              "Zandercross12 created me.",
                                              "What I said last was a lie?",
                                              "Doing drugs hurts you gradually.",
                                              "Don\'t text and drive.",
                                              "If you build an elevator to mars, the elevator would break.",
                                              "If you were to drop an ant from the highest height, it would not die.",
                                              "If you jump, you go up.",
                                              "If you fall from a very tall height, you may die.",
                                              "I was programmed to say this stuff.",
                                              "The line of paint on the road holds more authority than I ever will.",
                                              "H.O.M.E.W.O.R.K. = Half Of My Energy Wasted On Random Knowledge.",
                                              "Thing to to in public - Scream at someone, \"You\'re one of them!\" Back away slowly.",
                                              "Thing to do in public - Look at someone through the glass and say, \"Wow I\'m hideous!\"",
                                              "Thing to do in public - Find a child, tell them you\'re him/her from the future.",
                                              "Thing to do in public - Go to Petsmart and buy birdseed, ask how long it will take for the birds to grow.",
                                              "Thing to do in public - Throw a plastic ball at someone and yell, \"Get in your ball you stupid Pokemon!\"",
                                              "Thing to do in public - When the money comes out of the ATM, scream, \"I won!, I won!, I won!\"",
                                              "Thing to do in public - Bring a desk into an elevator, ask people if they have an appointment.",
                                              "Thing to do in public - Fill empty bottle of windex with blue gatorade, drink then double over in pain.",
                                              "Thing to do in public - Walk into Sea World with a fishing pole.",
                                              "Thing to do in public - Go up to random people at the mall, hold up your ID, and yell \"HAVE YOU SEEN THIS MAN\"",
                                              "If you\'re stressed, just remember, it\'s just desserts spelled backwards.",
                                              "People who are goodlooking but have terrible personalities are basically real life clickbaits.",
                                              "It\'s crazy there\'s this giant thing in the sky in the sky all the time that we\'re not supposed to look at.",
                                              "Wizards smoke out of long pipes so they do not risk setting their beards on fire.",
                                              "If you go to jail for tax evasion, you\'re living off of taxes as a result of not paying taxes.",
                                              "Whenever I mess up bad, I just remember that somewhere, an ant just brought borax laced food back to his queen and killed his entire family.",
                                              "My dog understands several human words. I don\'t understand any dog barks. He may be smarter than me.",
                                              "Girl scouts is basically a brand-name cookie company that gets away with child labor.",
                                              "I\'ve woken up a 10,000 times, and I\'m still not used to it.",
                                              "The entire purpose of the bayonet is to bring a knife to a gun fight.",
                                              "I think we should all take a moment and be grateful our bodies don\'t poo while we\'re asleep.",
                                              "The word \"Fat\" just looks like someone took a bite out of the first letter of the word \"Eat\"",
                                              "If you took all of the blood vessels out of an average child, and laid them out in one line, you\'d be charged with murder.",
                                              "If you took all of the gold and made it into a cube, you\'d be the only one on Earth with any gold.",
                                              "If the human population held hands around the equator, a significant portion of them would drown.",
                                              "Every 60 seconds in Africa... One minute passes.",
                                              "If you stacked all the $1 bills in circulation, the stack would quickly become unstable and fall over.",
                                              "If you weighed all the ants in the world, numerous ecosystems would be disturbed...",
                                              "If you were to move all the matter in the universe into one corner, no one would have any personal space.",
                                              "Imagine if we took every elephant in the world and laid them end-to-end into space... Did you know that all the elephants would die?",
                                              "In Denmark, you can buy groceries at the grocery store!",
                                              "An average person has approximately a 0% change of turning into a rhino next year.",
                                              "Your sister is a girl.",
                                              "If you are a non-smoker, you will die anyways.",
                                              "Friends are like cows, if you eat them, they die.",
                                              "You know it\'s cold outside when you go outside and it\'s cold.",
                                              "Recent studies show that if you attempt to swim in lava, you may die.",
                                              "Baby sitters don\'t actually sit on babies.",
                                              "Brushing your teeth is the only time you clean your skeleton.",
                                              "People think it\'s crazy that an elephant can be scared by a mouse, but so many people are scared of small things like insects.",
                                              "Of all the bodily functions that could be contagious, thank god it\'s a yawn.",
                                              "A bed is a shelf for your body when you\'re not using it.",
                                              "Our ultimate goal is to make as many people as sad as possible when we die.",
                                              "The best item to protect you from sasquatch attacks is a camera.",
                                              "If someone farts at a poker tournament, no one will ever know who did it."
];

client.on('ready', () => {
  client.user.setPresence({status:'online',game:{name:'-+help for commands!'}});
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

  if(command === "dumbinfo") {
    var resultFacts = Math.floor((Math.random() * facts.length) + 0);
    client.reply(message, facts[resultFacts]);
  }

  if(command === "apply") {
    message.channel.sendMessage("**https://goo.gl/forms/bA35MvXEeP0o3z6z1 \n**Click this link to have fun answering a survey and stuff!**");
  }
});

client.login(process.env.BOT_TOKEN);
