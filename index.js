let cards = [
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fea%2F59%2F28%2Fea59289ff04a29c2d2c3f867c16fe7a4.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.395960593.4609%2Fbg%2Cf8f8f8-flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fea%2F59%2F28%2Fea59289ff04a29c2d2c3f867c16fe7a4.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.395960593.4609%2Fbg%2Cf8f8f8-flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.jpg&f=1&nofb=1)'
]

let countDown = document.getElementById('countdown')
let startButton = document.getElementById('start')
let winner = document.getElementById('winner')
// let cardButton = document.querySelectorAll('button')
let card1 = document.getElementById('btn1')
let card2 = document.getElementById('btn2')
let card3 = document.getElementById('btn3')
let card4 = document.getElementById('btn4')
let clickCount = 0

function checkForMatch() {
  if (
    card1.style.backgroundImage.value == card2.style.backgroundImage.value &&
    card3.style.backgroundImage.value == card4.style.backgroundImage.value &&
    clickCount === 4
  ) {
    winner.innerHTML = 'Winner!'
    winner.style.color = 'whitesmoke'
    card1.style.backgroundImage = cards[0]
    card2.style.backgroundImage = cards[1]
    card3.style.backgroundImage = cards[2]
    card4.style.backgroundImage = cards[3]
  } else if (
    card1.style.backgroundImage == card3.style.backgroundImage &&
    card2.style.backgroundImage == card4.style.backgroundImage &&
    clickCount === 4
  ) {
    winner.innerHTML = 'Winner!'
    winner.style.color = 'whitesmoke'
    card1.style.backgroundImage = cards[0]
    card2.style.backgroundImage = cards[1]
    card3.style.backgroundImage = cards[2]
    card4.style.backgroundImage = cards[3]
  }
}

startButton.addEventListener('click', () => {
  function shuffle(cards) {
    cards.sort(() => Math.random() - 0.5)
  }
  shuffle(cards)
  let timeLeft = 15
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Times up!'
      card1.style.backgroundImage = ''
      card2.style.backgroundImage = ''
      card3.style.backgroundImage = ''
      card4.style.backgroundImage = ''
      startButton.disabled = false
    } else {
      countDown.value = 10 - timeLeft
      countDown.innerHTML = 'Countdown: ' + timeLeft + ' seconds remaining'
      card1.style.backgroundImage = cards[0]
      card2.style.backgroundImage = cards[1]
      card3.style.backgroundImage = cards[2]
      card4.style.backgroundImage = cards[3]
      startButton.disabled = true
    }
    timeLeft -= 1
  }, 1000)
})

card1.addEventListener('click', () => {
  clickCount = clickCount + 1
  let timeLeft = 10
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Times up!'
      card1.style.backgroundColor = '#45cded'
      card1.style.backgroundImage = ''
      card1.disabled = false
    } else {
      countDown.value = 10 - timeLeft
      countDown.innerHTML = 'Countdown: ' + timeLeft + ' seconds remaining'
      card1.style.backgroundImage = cards[0]
      card1.disabled = true
    }
    timeLeft -= 1
  }, 1000)
  checkForMatch()
})

card2.addEventListener('click', () => {
  clickCount = clickCount + 1
  let timeLeft = 10
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Times up!'
      card2.style.backgroundColor = '#45cded'
      card2.style.backgroundImage = ''
      card2.disabled = false
    } else {
      countDown.value = 10 - timeLeft
      countDown.innerHTML = 'Countdown: ' + timeLeft + ' seconds remaining'
      card2.style.backgroundImage = cards[1]
      card2.disabled = true
    }
    timeLeft -= 1
  }, 1000)
  checkForMatch()
})

card3.addEventListener('click', () => {
  clickCount = clickCount + 1
  let timeLeft = 10
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Times up!'
      card3.style.backgroundColor = '#45cded'
      card3.style.backgroundImage = ''
      card3.disabled = false
    } else {
      countDown.value = 10 - timeLeft
      countDown.innerHTML = 'Countdown: ' + timeLeft + ' seconds remaining'
      card3.style.backgroundImage = cards[2]
      card3.disabled = true
    }
    timeLeft -= 1
  }, 1000)
  checkForMatch()
})

card4.addEventListener('click', () => {
  clickCount = clickCount + 1
  let timeLeft = 10
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Times up!'
      card4.style.backgroundColor = '#45cded'
      card4.style.backgroundImage = ''
      card4.disabled = false
    } else {
      countDown.value = 10 - timeLeft
      countDown.innerHTML = 'Countdown: ' + timeLeft + ' seconds remaining'
      card4.style.backgroundImage = cards[3]
      card4.disabled = true
    }
    timeLeft -= 1
  }, 1000)
  checkForMatch()
})
