let cards = [
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fea%2F59%2F28%2Fea59289ff04a29c2d2c3f867c16fe7a4.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.395960593.4609%2Fbg%2Cf8f8f8-flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fea%2F59%2F28%2Fea59289ff04a29c2d2c3f867c16fe7a4.jpg&f=1&nofb=1)',
  'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.395960593.4609%2Fbg%2Cf8f8f8-flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.jpg&f=1&nofb=1)'
]

let countDown = document.getElementById('countdown')
let startButton = document.getElementById('start')
let loser = document.querySelector('.loser')
let cardButton = document.getElementById('btn')
let imgs =
  // let cardsClicked = []
  // let cardsIndex = []
  // let cardsMatched = 0

  startButton.addEventListener('click', () => {
    function shuffle(cards) {
      cards.sort(() => Math.random() - 0.5)
      cardButton.style.backgroundImage = cards
    }
    shuffle(cards)

    let timeLeft = 15
    const timer = setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval(timer)
        countDown.innerHTML = 'Times up!'
        cardButton.style.backgroundImage = ''
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
  cardButton.style.backgroundColor = '#8d8ff3'

  let timeLeft = 10
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Times up!'
      cardButton.style.backgroundColor = '#45cded'
      cardButton.disabled = false
    } else {
      countDown.value = 10 - timeLeft
      countDown.innerHTML = 'Countdown: ' + timeLeft + ' seconds remaining'
      cardButton.style.backgroundColor = '#8d8ff3'
      cardButton.disabled = true
    }
    timeLeft -= 1
  }, 1000)
})

// buttonTwo.addEventListener('click', () => {
//   buttonTwo.style.backgroundImage =
//     'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fea%2F59%2F28%2Fea59289ff04a29c2d2c3f867c16fe7a4.jpg&f=1&nofb=1)'
//   buttonOne.innerHTML = ''

//   let timeLeft = 10
//   const timer = setInterval(function () {
//     if (timeLeft <= 0) {
//       clearInterval(timer)
//       countDown.innerHTML = 'Times up!'
//       buttonTwo.style.backgroundImage = ''
//     } else {
//       countDown.value = 10 - timeLeft
//       countDown.innerHTML = 'Countdown: ' + timeLeft + ' seconds remaining'
//       buttonTwo.style.backgroundImage =
//         'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fea%2F59%2F28%2Fea59289ff04a29c2d2c3f867c16fe7a4.jpg&f=1&nofb=1)'
//     }
//     timeLeft -= 1
//   }, 1000)
// })
