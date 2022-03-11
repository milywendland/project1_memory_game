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
let matchesStyle = document.getElementById('matches')

let cardsMatched = 'cloud'
let cardsClicked = []
let matches = []
clickCount = 0

let card1style = cards[0]
let card2style = cards[1]
let card3style = cards[2]
let card4style = cards[3]
let card5style = cards[4]
let card6style = cards[5]
let card7style = cards[6]
let card8style = cards[7]

checkMatch = () => {
  if (cardsClicked.length === 2 && cardsClicked[0] === cardsClicked[1]) {
    matches.push(cardsClicked)
    console.log(matches)
  } else if (cardsClicked.length === 2 && cardsClicked[0] !== cardsClicked[1]) {
    cardsMatched = 'poop'
  }
}

checkWin = () => {
  if ((matches.length = cards.length / 2) && clickCount >= 8) {
    winner.innerHTML = 'You Win!'
  }
}

startButton.addEventListener('click', () => {
  clickCount = 0
  matches = []
  cardsClicked = []
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
  cardsClicked.push(card1style)
  card1.style.backgroundImage = cards[0]
  clickCount += 1
  checkMatch()
  checkWin()
})

card2.addEventListener('click', () => {
  cardsClicked.push(card2style)
  card2.style.backgroundImage = cards[1]
  clickCount += 1
  checkMatch()
  checkWin()
})

card3.addEventListener('click', () => {
  cardsClicked.push(card3style)
  card3.style.backgroundImage = cards[2]
  clickCount += 1
  checkMatch()
  checkWin()
})

card4.addEventListener('click', () => {
  cardsClicked.push(card4style)
  card4.style.backgroundImage = cards[3]
  clickCount += 1
  checkMatch()
  checkWin()
})

card5.addEventListener('click', () => {
  cardsClicked.push(card5style)
  card5.style.backgroundImage = cards[4]
  clickCount += 1
  checkMatch()
  checkWin()
})

card6.addEventListener('click', () => {
  cardsClicked.push(card6style)
  card6.style.backgroundImage = cards[5]
  clickCount += 1
  checkMatch()
  checkWin()
})

card7.addEventListener('click', () => {
  cardsClicked.push(card7style)
  card7.style.backgroundImage = cards[6]
  clickCount += 1
  checkMatch()
  checkWin()
})

card8.addEventListener('click', () => {
  cardsClicked.push(card8style)
  card8.style.backgroundImage = cards[7]
  clickCount += 1
  checkMatch()
  checkWin()
})
