const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

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

var facts = ["Don\'t touch me!!!",
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
  "If someone farts at a poker tournament, no one will ever know who did it."];
  
client.on('ready', () => {
  client.user.setPresence({game: {name: "-+help", type: 0}});
  console.log('I am ready!');
});

client.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "general").sendMessage(member.toString() + " Welcome taco brethren!");
  
  member.addRole(member.guild.roles.find("name", "Member"));
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  
});

client.login(process.env.BOT_TOKEN);
