const { MessageAttachment } = require("discord.js");

module.exports = {
  name: "version",
  description: "Gives version info",
  execute(msg, args) {
    const version = "0.0.2";
    const versionGif = new MessageAttachment('https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif')
    msg.channel.send("Current version: " + version);
    msg.channel.send(versionGif);
  },
};
