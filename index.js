const mineflayer = require('mineflayer')

function start() {
  const bot = mineflayer.createBot({
    host: 'AethersSMP.aternos.me',
    port: 53569,
    username: 'AFK_Bot'
  })

  bot.on('spawn', () => {
    console.log('Joined server')

    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 10000)
  })

  bot.on('end', () => {
    console.log('Reconnecting...')
    setTimeout(start, 5000)
  })

  bot.on('error', err => console.log(err))
}

start()
