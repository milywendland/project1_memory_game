let cards = [
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fea%2F59%2F28%2Fea59289ff04a29c2d2c3f867c16fe7a4.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.395960593.4609%2Fbg%2Cf8f8f8-flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fea%2F59%2F28%2Fea59289ff04a29c2d2c3f867c16fe7a4.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.395960593.4609%2Fbg%2Cf8f8f8-flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F15%2F55%2F02%2F155502a5dfd89c8d1de22c8bcd25a2d1.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F15%2F55%2F02%2F155502a5dfd89c8d1de22c8bcd25a2d1.jpg&f=1&nofb=1)'
]

let countDown = document.getElementById('countdown')
let startButton = document.getElementById('start')
let winner = document.getElementById('winner')
let newGameButton = document.getElementById('new-game')
let cardButton = document.getElementById('card')
let clickCount = 0

startButton.addEventListener('click', () => {
  clickCount == 0
  winner.innerHTML = ''
  winner.style = ''

  function shuffle(cards) {
    cards.sort(() => Math.random() - 0.5)
  }
  shuffle(cards)
  let timeLeft = 15
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Times up! Pick a card!'
      startButton.disabled = false
    } else {
      countDown.value = 10 - timeLeft
      countDown.innerHTML = 'Countdown: ' + timeLeft + ' seconds remaining'
      startButton.disabled = true
    }
    timeLeft -= 1
  }, 1000)
})

cardButton.addEventListener('click', () => {
  clickCount = clickCount + 1
  let timeLeft = 10
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Pick a card!'
    } else {
      countDown.value = 10 - timeLeft
    }
    timeLeft -= 1
  }, 1000)
  console.log('click')
})
