const TelegramBot = require('node-telegram-bot-api');

const botToken = '6134933127:AAHG5mHmFJu2qtWEAKMmxBklq8JLnWhkFdw';

const bot = new TelegramBot(botToken, {polling: true});

bot.on('message', async msg => {
    console.log(msg);
    let chatId = msg.chat.id;

    if(msg.text === '/start')
        await bot.sendMessage(chatId, 'Пліветь', { reply_markup:{ "keyboard": [["/start"],["Хто підор?", "Скільки нас?"]]}});
    // bot.sendsticker(chatId, 'https://tlgrm.eu/_/stickers/9e9/6dc/9e96dc9a-90ed-3994-9c2f-d2a269f548d4/9.webp');
    if(msg.text === 'Хто підор?')
        await bot.sendMessage(chatId, 'Владік');
})