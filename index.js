let buttonOne = document.getElementById('card-one')
let countDown = document.getElementById('countdown')
let startButton = document.getElementById('start')

startButton.addEventListener('click', () => {
  let timeLeft = 15
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Times up!'
      buttonOne.style.backgroundImage = ''
    } else {
      countDown.value = 10 - timeLeft
      countDown.innerHTML = 'Countdown: ' + timeLeft + ' seconds remaining'
      buttonOne.style.backgroundImage =
        'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.395960593.4609%2Fbg%2Cf8f8f8-flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.jpg&f=1&nofb=1)'
    }
    timeLeft -= 1
  }, 1000)
})

buttonOne.addEventListener('click', () => {
  buttonOne.style.backgroundImage =
    'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.395960593.4609%2Fbg%2Cf8f8f8-flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.jpg&f=1&nofb=1)'
  buttonOne.innerHTML = ''

  let timeLeft = 10
  const timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
      countDown.innerHTML = 'Times up!'
      buttonOne.style.backgroundImage = ''
    } else {
      countDown.value = 10 - timeLeft
      countDown.innerHTML = 'Countdown: ' + timeLeft + ' seconds remaining'
      buttonOne.style.backgroundImage =
        'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.395960593.4609%2Fbg%2Cf8f8f8-flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.jpg&f=1&nofb=1)'
    }
    timeLeft -= 1
  }, 1000)
})
