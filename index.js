const Discord = require("discord.js");
const fs = require("fs");
const ytdl = require("ytdl-core");
const myToken = require("./token");

const bot = new Discord.Client();

const token = myToken.token;
const prefix = "-";
const commandFiles = fs.readdirSync("./commands/").filter((file) => {
  return file.endsWith(".js");
});

bot.commands = new Discord.Collection();
bot.login(token);

for (let file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}



bot.once("ready", () => {
  console.log(`${bot.user.tag} is online`);
});
bot.on("message", async (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  switch (command) {
    case "hi":
      bot.commands.get("greet").execute(msg, args);
      break;

    case "v": {
      bot.commands.get("version").execute(msg, args);
      break;
    }

    case "whoisnoob": {
      msg.reply("Omega is Noob!");
      break;
    }

    case "play": {
      if (args[1]) {
        if (msg.member.voice.channel) {
          let song = args[1];
          const connection = await msg.member.voice.channel.join();
          connection.play(
            ytdl(song, {
              filter: "audioonly",
            })
          );
        } else {
          msg.reply("You need to join a voice channel first!");
        }
      }
    }
  }
});
