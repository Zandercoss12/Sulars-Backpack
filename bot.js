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

client.login(process.env.BOT_TOKEN);

