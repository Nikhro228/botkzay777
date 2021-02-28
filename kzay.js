const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!кчау';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('!кчау хелп', { type: 'PLAYNING' });
  
});

client.on('message', message => {
  let msg = message.content.toLowerCase();
  let args = message.content.substring(prefix.length).split(' ')
if (msg.includes(prefix + 'скажи')){
  if (!args[1]){
     return message.channel.send('напиши что ты хочешь чтоб я сказал')

  }
   message.channel.send(args.slice(1).join(" "))
}

if (msg.includes(prefix + 'монетка'))
  let number = Math.floor(Math.random() * 2);
 if (number == 1){
   message.channel.send('Орёл')
 }
if (number == 0){
  message.channel.send('Решка')
}
if (msg.includes(prefix + 'вопрос'))
  if(lurgs[2]){
    return message.channel.send('напишите полный вопрос')
  }
  let number = Math.floor(Math.random() * 6);
  if (number == 0){
    return message,channel.send('да')
  }
  if (number == 1){
    return message,channel.send('нет')
  }
  if (number == 2){
    return message,channel.send('спроси позже')
  }
  if (number == 3){
    return message,channel.send('хз')
  }
  if (number == 4){
    return message,channel.send('будь уверен в этом')
  }
  if (number == 5){
    return message,channel.send('нет, точно нет')
  }
  if (msg.includes(prefix + 'убить'))
  let user = message.mentions.users.first();
  if (!user){
    return message.channel.send('напиши чью мать ты хочешь убить')
  }
  return message.channel.send(message.author.username + 'убил' + user.username)
})

client.on('message', msg => {
  if (msg.content === prefix + '!кчау Кчау') {
    msg.reply('Кчау!');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + '!кчау ты безмамный') {
    msg.reply('у меня есть мама,а у тебя нет');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + '!кчау') {
    msg.reply('такой команды не существует,напишите: !кчау хелп чтобы узнать все команды');
  }
});


client.on('message', msg => {
  if (msg.content === prefix + 'а') {
    msg.reply('такой команды не существует,напишите: !кчау хелп чтобы узнать все команды');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'б') {
    msg.reply('такой команды не существует,напишите: !кчау хелп чтобы узнать все команды');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'хелп') {
    msg.reply('https://sites.google.com/view/commandsbotkzay');
  }
});

client.on('message', msg => {
  if (msg.content ===  prefix + 'мать жива?') {
    msg.reply('да а у тебя?');
  }
});

client.on('message', msg => {
  if (msg.content ===  prefix + 'да') {
    msg.reply('В смысле? Я же её в канаве закопал');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'нет') {
    msg.reply('хахахахахахах,безмамный');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка1') {
    msg.reply('мы твою мать,толпой выебали');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка2') {
    msg.reply('твоя мать сегодня хорошо сосала');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка3') {
    msg.reply('вчера устроили заезд с друзьями,пустили твою мать по кругу');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка4') {
    msg.reply('твоя мать жирная');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка5') {
    msg.reply('мы твою мать в космос отправили');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка6') {
    msg.reply('у тебя мать в канаве');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка7') {
    msg.reply('пёрнул в ебло твоей матери');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка8') {
    msg.reply('я твою маму на авито продал');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка9') {
    msg.reply('я твою мать на ставках проебал');
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'шутка10') {
    msg.reply('мы твою мать на запчасти разобрали');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка11') {
    msg.reply('я твою мать загрыз нахуй');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка12') {
    msg.reply('я твою мать нахуй переехал');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка13') {
    msg.reply('я твою мать в мусорку выкинул');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка14') {
    msg.reply('проткнул твою мать в шею и тут же выебал в эту дырку');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка15') {
    msg.reply('я твою мать на глушитель сажал и на поршнях вертел');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка16') {
    msg.reply('у вас мать сгорела');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка17') {
    msg.reply('вчера видел твою мать голой в мусорке');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка18') {
    msg.reply('воткнул в комп твою мать, она сгорела нахуй');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка19') {
    msg.reply('приехал забрать твою мать в сосательные войска');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка20') {
    msg.reply('я твою маму в майнкрафте загриферил и выебал');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка21') {
    msg.reply('на войне нужна была шлюха,которая отсосёт всей армии твоя мать подошла больше всего');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка22') {
    msg.reply('твоя мамка болше киберпанка весит');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка23') {
    msg.reply('я твою мать на юле продал');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка24') {
    msg.reply('насадил твою мамашу на армейский пулемёт');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка25') {
    msg.reply('я твою мать в туалет смыл');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка26') {
    msg.reply('ебал твою мать,пока ты был в школе');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка27') {
    msg.reply('пока медведи сосут лапу,твоя мать сосёт хуй');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка28') {
    msg.reply('твоя мать отлично подходит для озвучки хентая');
  }
});


client.on('message', msg => {
  if (msg.content === prefix + 'шутка29') {
    msg.reply('я твою мать на металлолом сдал');
  }
});


client.on('message', msg => {
  if (msg.content === prefix + 'шутка30') {
    msg.reply('вижу твою мать за километр,пиздец она жирная');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка31') {
    msg.reply('еду уважать твою мать');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка32') {
    msg.reply('еду ебать твою мать');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка33') {
    msg.reply('я твою мамашу на Аликэкспрессе продал');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка34') {
    msg.reply('скажи 300');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + '300') {
    msg.reply('пусть твоя мать отсосёт у тракториста');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'А4 говно?') {
    msg.reply('да');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'шутка35') {
    msg.reply('твоя мать такая жирная что на гонке раздавила конкурентов');
  }
});

client.login(process.env.BOT_TOKEN)