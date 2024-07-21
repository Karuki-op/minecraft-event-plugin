const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'localhost', // Your Minecraft server address
  port: 25565,       // Your Minecraft server port
  username: 'Bot',   // Your bot's username
});

bot.on('spawn', () => {
  console.log('Bot has spawned');
  bot.chat('Hello, I am a bot!');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(`Hi ${username}, you said: ${message}`);
});

bot.on('error', (err) => {
  console.log('An error occurred:', err);
});

bot.on('end', () => {
  console.log('Bot has disconnected');
});
