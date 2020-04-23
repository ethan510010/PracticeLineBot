const linebot = require('linebot');
require('dotenv').config();

const bot = linebot({
  channelId: process.env.channelID,
  channelSecret: process.env.channelSecret,
  channelAccessToken: process.env.channelAccessToken
})

bot.on('message', async (event) => {
  const originalMessage = event.message.text;
  try {
    await event.reply(`User says: ${originalMessage}`);
  } catch (error) {
    throw error;
  }
})


bot.listen('/linewebhook', process.env.PORT || 3000, () => {
  console.log('Bot starts');
})