const { MessageAttachment } = require("discord.js");

module.exports = {
  name: "greet",
  description: "Greets user",
  execute(msg, args) {
    const greetings = [
      "What’s kickin’, little chicken?",
      "Peek-a-boo!",
      "Howdy-doody!",
      "Ahoy, matey!",
      "Hiya!",
      "What’s crackin’?",
      "Yo!",
      "Aloha",
      "Hola",
      "Bonjour",
      "Ciao",
      "こんにちは",
    ];
    const greetingGif = new MessageAttachment('https://media.giphy.com/media/IThjAlJnD9WNO/giphy.gif');
    msg.reply(greetings[Math.floor(Math.random() * 11)]);
    msg.channel.send(greetingGif);
  },
};
