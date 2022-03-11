let cards = [
  'url(https://64.media.tumblr.com/3a07caa82aa7d57105ee006a55ecaa33/55b9c5b0db771b06-8b/s500x750/4a3ecbf8119af2ab48f2ea3468a2254b0f5841e7.png)',
  'url(https://64.media.tumblr.com/3a07caa82aa7d57105ee006a55ecaa33/55b9c5b0db771b06-8b/s500x750/4a3ecbf8119af2ab48f2ea3468a2254b0f5841e7.png)',
  'url(https://64.media.tumblr.com/c463853f78b0bc7da1c8c205fb9da318/55b9c5b0db771b06-20/s540x810/eb713fc2467813e7051b72deb0878e3e294c7df2.png)',
  'url(https://64.media.tumblr.com/c463853f78b0bc7da1c8c205fb9da318/55b9c5b0db771b06-20/s540x810/eb713fc2467813e7051b72deb0878e3e294c7df2.png)',
  'url(https://64.media.tumblr.com/4e670e7e9295be9dd59edc2e8ced7291/55b9c5b0db771b06-57/s400x600/50c491dc69a1a6ae88f42d32985e41cf24a5d3af.png)',
  'url(https://64.media.tumblr.com/4e670e7e9295be9dd59edc2e8ced7291/55b9c5b0db771b06-57/s400x600/50c491dc69a1a6ae88f42d32985e41cf24a5d3af.png)',
  'url(https://64.media.tumblr.com/3497c8a6edb8a25df413a6f9c6371444/55b9c5b0db771b06-4e/s400x600/c6e34f9e7e300058a848f57a2968747680cf3253.png)',
  'url(https://64.media.tumblr.com/3497c8a6edb8a25df413a6f9c6371444/55b9c5b0db771b06-4e/s400x600/c6e34f9e7e300058a848f57a2968747680cf3253.png)'
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
// let matches = []

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

// matchList = () => {
//   if ((cardsMatched += 1)) {
//     matches.length += 1
//     return (match = true)
//   }
// }

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
      card1.style.backgroundImage =
        'url(https://64.media.tumblr.com/1f9b5180c50d50ca0a223e35c82f040d/55b9c5b0db771b06-48/s1280x1920/49ca034a35f9b5499e2f7622493be23180eed2cf.png)'
      card2.style.backgroundImage =
        'url(https://64.media.tumblr.com/1f9b5180c50d50ca0a223e35c82f040d/55b9c5b0db771b06-48/s1280x1920/49ca034a35f9b5499e2f7622493be23180eed2cf.png)'
      card3.style.backgroundImage =
        'url(https://64.media.tumblr.com/1f9b5180c50d50ca0a223e35c82f040d/55b9c5b0db771b06-48/s1280x1920/49ca034a35f9b5499e2f7622493be23180eed2cf.png)'
      card4.style.backgroundImage =
        'url(https://64.media.tumblr.com/1f9b5180c50d50ca0a223e35c82f040d/55b9c5b0db771b06-48/s1280x1920/49ca034a35f9b5499e2f7622493be23180eed2cf.png)'
      card5.style.backgroundImage =
        'url(https://64.media.tumblr.com/1f9b5180c50d50ca0a223e35c82f040d/55b9c5b0db771b06-48/s1280x1920/49ca034a35f9b5499e2f7622493be23180eed2cf.png)'
      card6.style.backgroundImage =
        'url(https://64.media.tumblr.com/1f9b5180c50d50ca0a223e35c82f040d/55b9c5b0db771b06-48/s1280x1920/49ca034a35f9b5499e2f7622493be23180eed2cf.png)'
      card7.style.backgroundImage =
        'url(https://64.media.tumblr.com/1f9b5180c50d50ca0a223e35c82f040d/55b9c5b0db771b06-48/s1280x1920/49ca034a35f9b5499e2f7622493be23180eed2cf.png)'
      card8.style.backgroundImage =
        'url(https://64.media.tumblr.com/1f9b5180c50d50ca0a223e35c82f040d/55b9c5b0db771b06-48/s1280x1920/49ca034a35f9b5499e2f7622493be23180eed2cf.png)'
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
