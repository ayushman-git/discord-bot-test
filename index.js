const Discord = require("discord.js");
const bot = new Discord.Client();
const ytdl = require("ytdl-core");

const token = "NzQ0OTE2MDc3NzAzNzI1MDY2.XzqLKA.PE4N_KeuKI5qnZIUytH3lu_VWjI";
const prefix = "-";
const version = "0.0.1";

bot.login(token);

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}`);
});
bot.on("message", async (msg) => {
  let args = msg.content.substring(prefix.length).split(" ");

  switch (args[0]) {
    case "hi":
      msg.reply("Hello");
      break;

    case "v": {
      msg.channel.send("Version: " + version);
      break;
    }

    case "loser": {
      const attachment = new Discord.MessageAttachment(
        "https://media.tenor.com/images/4caae79956a9905f3656ef971114fdf3/tenor.gif"
      );
      msg.channel.send(`${msg.author},`, attachment);
      break;
    }

    case "avatar": {
      msg.reply(msg.author.displayAvatarURL());
      break;
    }

    case "whoisnoob": {
      msg.reply('Omega is Noob!');
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
