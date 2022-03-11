let cards = [
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fea%2F59%2F28%2Fea59289ff04a29c2d2c3f867c16fe7a4.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.395960593.4609%2Fbg%2Cf8f8f8-flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fea%2F59%2F28%2Fea59289ff04a29c2d2c3f867c16fe7a4.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.395960593.4609%2Fbg%2Cf8f8f8-flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F15%2F55%2F02%2F155502a5dfd89c8d1de22c8bcd25a2d1.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F15%2F55%2F02%2F155502a5dfd89c8d1de22c8bcd25a2d1.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fbear-hugging-salmon-fish-vector-cartoon-isolated-white-background-cute-pastel-bear-vector-cartoon-illustration-bear-134122685.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fbear-hugging-salmon-fish-vector-cartoon-isolated-white-background-cute-pastel-bear-vector-cartoon-illustration-bear-134122685.jpg&f=1&nofb=1)'
]

let countDown = document.getElementById('countdown')
let startButton = document.getElementById('start')
let winner = document.getElementById('winner')
let card1 = document.getElementById('btn1')
let card2 = document.getElementById('btn2')
let card3 = document.getElementById('btn3')
let card4 = document.getElementById('btn4')
let card5 = document.getElementById('btn5')
let card6 = document.getElementById('btn6')
let card7 = document.getElementById('btn7')
let card8 = document.getElementById('btn8')

let clickCount = 0
let cardsMatched = 0
let matches = []

let card1style = card1.style.backgroundImage
let card2style = card1.style.backgroundImage
let card3style = card1.style.backgroundImage
let card4style = card1.style.backgroundImage
let card5style = card1.style.backgroundImage
let card6style = card1.style.backgroundImage
let card7style = card1.style.backgroundImage
let card8style = card1.style.backgroundImage

checkMatch = () => {
  if (cards[0] === cards[1]) {
    cardsMatched += 1
  } else if (cards[0] === cards[2]) {
    cardsMatched += 1
  } else if (cards[0] === cards[3]) {
    cardsMatched += 1
  } else if (cards[0] === cards[4]) {
    cardsMatched += 1
  } else if (cards[0] === cards[5]) {
    cardsMatched += 1
  } else if (cards[0] === cards[6]) {
    cardsMatched += 1
  } else if (cards[0] === cards[7]) {
    cardsMatched += 1
  } else if (cards[1] === cards[2]) {
    cardsMatched += 1
  } else if (cards[1] === cards[3]) {
    cardsMatched += 1
  } else if (cards[1] === cards[4]) {
    cardsMatched += 1
  } else if (cards[1] === cards[5]) {
    cardsMatched += 1
  } else if (cards[1] === cards[6]) {
    cardsMatched += 1
  } else if (cards[1] === cards[7]) {
    cardsMatched += 1
  } else if (cards[2] === cards[3]) {
    cardsMatched += 1
  } else if (cards[2] === cards[4]) {
    cardsMatched += 1
  } else if (cards[2] === cards[5]) {
    cardsMatched += 1
  } else if (cards[2] === cards[6]) {
    cardsMatched += 1
  } else if (cards[2] === cards[7]) {
    cardsMatched += 1
  } else if (cards[3] === cards[4]) {
    cardsMatched += 1
  } else if (cards[4] === cards[5]) {
    cardsMatched += 1
  } else if (cards[4] === cards[6]) {
    cardsMatched += 1
  } else if (cards[4] === cards[7]) {
    cardsMatched += 1
  } else if (cards[5] === cards[6]) {
    cardsMatched += 1
  } else if (cards[5] === cards[7]) {
    cardsMatched += 1
  } else if (cards[6] === cards[7]) {
    cardsMatched += 1
  }
}

matchList = () => {
  if ((cardsMatched += 1)) {
    matches.length += 1
    return (match = true)
  }
}

changeCardBackground = () => {}

checkWin = () => {
  if ((cardsMatched = cards.length / 2 && clickCount >= 8)) {
    winner.innerHTML = 'YOU WON!'
  }
}

startButton.addEventListener('click', () => {
  clickCount = 0
  cardsMatched = 0
  winner.innerHTML = ''
  winner.style = ''
  function shuffle(cards) {
    cards.sort(() => Math.random() - 0.5)
  }
  let timeLeft = 9
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Pick a card!'
      card1.style.backgroundImage = ''
      card2.style.backgroundImage = ''
      card3.style.backgroundImage = ''
      card4.style.backgroundImage = ''
      card5.style.backgroundImage = ''
      card6.style.backgroundImage = ''
      card7.style.backgroundImage = ''
      card8.style.backgroundImage = ''
    } else {
      countDown.value = 9 - timeLeft
      countDown.innerHTML = 'Countdown: ' + timeLeft
      card1.style.backgroundImage = cards[0]
      card2.style.backgroundImage = cards[1]
      card3.style.backgroundImage = cards[2]
      card4.style.backgroundImage = cards[3]
      card5.style.backgroundImage = cards[4]
      card6.style.backgroundImage = cards[5]
      card7.style.backgroundImage = cards[6]
      card8.style.backgroundImage = cards[7]
    }
    timeLeft -= 1
  }, 1000)
  shuffle(cards)
  countDown.innerHTML = 'Pick a card!'
})

card1.addEventListener('click', () => {
  clickCount = clickCount + 1
  let timeLeft = 7
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Pick a card!'
      card1.style.backgroundImage = ''
    } else {
      countDown.value = 7 - timeLeft
      card1.style.backgroundImage = cards[0]
    }
    timeLeft -= 1
  }, 1000)
  checkMatch()
  checkWin()
})

card2.addEventListener('click', () => {
  clickCount = clickCount + 1
  let timeLeft = 7
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Pick a card!'
      card2.style.backgroundImage = ''
    } else {
      countDown.value = 7 - timeLeft
      card2.style.backgroundImage = cards[1]
    }
    timeLeft -= 1
  }, 1000)
  checkMatch()
  checkWin()
})

card3.addEventListener('click', () => {
  clickCount = clickCount + 1
  let timeLeft = 7
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Pick a card!'
      card3.style.backgroundImage = ''
    } else {
      countDown.value = 7 - timeLeft
      card3.style.backgroundImage = cards[2]
    }
    timeLeft -= 1
  }, 1000)
  checkMatch()
  checkWin()
})

card4.addEventListener('click', () => {
  clickCount = clickCount + 1
  let timeLeft = 7
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Pick a card!'
      card4.style.backgroundImage = ''
    } else {
      countDown.value = 7 - timeLeft
      card4.style.backgroundImage = cards[3]
    }
    timeLeft -= 1
  }, 1000)
  checkMatch()
  checkWin()
})

card5.addEventListener('click', () => {
  clickCount = clickCount + 1
  let timeLeft = 7
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Pick a card!'
      card5.style.backgroundImage = ''
    } else {
      countDown.value = 7 - timeLeft
      card5.style.backgroundImage = cards[4]
    }
    timeLeft -= 1
  }, 1000)
  checkMatch()
  checkWin()
})

card6.addEventListener('click', () => {
  clickCount = clickCount + 1
  let timeLeft = 7
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Pick a card!'
      card6.style.backgroundImage = ''
    } else {
      countDown.value = 7 - timeLeft
      card6.style.backgroundImage = cards[5]
    }
    timeLeft -= 1
  }, 1000)
  checkMatch()
  checkWin()
})

card7.addEventListener('click', () => {
  clickCount = clickCount + 1
  let timeLeft = 7
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Pick a card!'
      card7.style.backgroundImage = ''
    } else {
      countDown.value = 7 - timeLeft
      card7.style.backgroundImage = cards[6]
    }
    timeLeft -= 1
  }, 1000)
  checkMatch()
  checkWin()
})

card8.addEventListener('click', () => {
  clickCount = clickCount + 1
  let timeLeft = 7
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Pick a card!'
      card8.style.backgroundImage = ''
    } else {
      countDown.value = 7 - timeLeft
      card8.style.backgroundImage = cards[7]
    }
    timeLeft -= 1
  }, 1000)
  checkMatch()
  checkWin()
})
