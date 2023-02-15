const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonUp = document.querySelector('.up')
const buttonDown = document.querySelector('.down')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonImg01 = document.querySelector('.card01')
const buttonImg02 = document.querySelector('.card02')
const buttonImg03 = document.querySelector('.card03')
const buttonImg04 = document.querySelector('.card04')
const forest = new Audio('./sounds/Floresta.wav')
const rain = new Audio('./sounds/Chuva.wav')
const coffeShop = new Audio('./sounds/Cafeteria.wav')
const firePlace = new Audio('./sounds/Lareira.wav')
const changeTheme = document.querySelector('#change-theme')
const lightMode = document.querySelector('.light-mode')
const darkMode = document.querySelector('.dark-mode')

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)
let newMinutes
let newSeconds
let timerTimeOut

function updateTimerDisplay(newMinutes, newSeconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = newSeconds
  minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
  secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes)
  clearTimeout(timerTimeOut)
}

function countdown(){
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFished = minutes <= 0 && seconds <= 0
    
    
    if( isFished ) {
      resetTimer()
      updateTimerDisplay()
      secondsDisplay.textContent = "00"
      
      return
    }
    

    if( seconds <= 0 ) {
      seconds = 60

      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }
    
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

   
    
    countdown()
  }, 1000)
}

function updateMinutes (newMinutes) {
  minutes = newMinutes
}

buttonPlay.addEventListener('click', function() {
  countdown()
})

buttonStop.addEventListener('click', function() {
  clearTimeout(timerTimeOut)
})

buttonDown.addEventListener('click', function() {
  let newMinutes = Number(minutesDisplay.textContent)
  let newSeconds = Number(secondsDisplay.textContent)
  if(newMinutes > 0) {
    updateMinutes(newMinutes - 5) 
    updateTimerDisplay(newMinutes, newSeconds)
  }
})

buttonUp.addEventListener('click', function() {
  let newMinutes = Number(minutesDisplay.textContent)
  let newSeconds = Number(secondsDisplay.textContent)
  updateMinutes (newMinutes + 5) 
  updateTimerDisplay(newMinutes, newSeconds)
})

function handleClick(){
  buttonImg01.addEventListener('click', function() {
  buttonImg01.classList.toggle('card-active')
  if(buttonImg01.classList.contains('card-active')) {
    forest.play()
  } else {
    forest.pause()
  }
  })

  buttonImg02.addEventListener('click', function() {
  buttonImg02.classList.toggle('card-active')
  if(buttonImg02.classList.contains('card-active')) {
    rain.play()
  } else {
    rain.pause()
  }
  })

  buttonImg03.addEventListener('click', function() {
  buttonImg03.classList.toggle('card-active')
  if(buttonImg03.classList.contains('card-active')) {
    coffeShop.play() 
  } else {
    coffeShop.pause()
  }
  })

  buttonImg04.addEventListener('click', function() {
  buttonImg04.classList.toggle('card-active')
  if(buttonImg04.classList.contains('card-active')) {
    firePlace.play()
  } else {
    firePlace.pause()
  }
  })
}

function Theme() {
  document.body.classList.toggle('dark')
}

function light() {
  lightMode.classList.add('hide')
  darkMode.classList.remove('hide')
}

function dark() {
  darkMode.classList.add('hide')
  lightMode.classList.remove('hide')
}


darkMode.addEventListener('click', function() {
  Theme()
  dark()
})


lightMode.addEventListener('click', function() {
  Theme()
  light()
})

