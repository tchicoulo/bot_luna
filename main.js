const Discord =  require('discord.js')
const bot = new Discord.Client()


bot.on('message', function(message){
  if (message.content === '!ping' ) {
    message.reply('pong!')
  }
  if (message.content === 'Chaton' ) {
    message.reply('I <3 Cats!!!')
  }
})

setInterval (function () {
      bot.channels.find("name", "général").send('@everyone Trop Mignon!')
    }, 120 * 1000)



bot.on('ready', () => {
  bot.user.setGame('Hello Kitty Online')
})

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('458636964569284618').send('Meoww ! => Bienvenue'); 
});



bot.login('NDU4NjM2OTY0NTY5Mjg0NjE4.DgqoJQ.vmEimcQMdaXz7vJHU9j4F27vCQ8')
