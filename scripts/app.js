const width = 10
const squares = []
let playerIndex = Math.floor(width * width / 2)
let direction = null
// use math.floor for player to start on the 12th sq. Or just put 0 for them to start at 0
let gameInPlay = false
let playerShouldMove = false
let playerScore = 0
let playerScoreBoard = null
let sound = null
let foodEaten = 0
let snake = []
const result = 0
let speed = 300
let song = null

function handleKeyDown(e) {
  //console.log(e.keyCode)
  playerShouldMove = true
  if (gameInPlay) {
    switch(e.key) {
      case 'ArrowRight':
        direction = direction === 'left' ? 'left' : 'right'
        //asking the question if the direction is going right? if it is then they stay right
        break
      case 'ArrowLeft':
        direction = direction === 'right' ? 'right' : 'left'
        break
      case 'ArrowUp':
        direction = direction === 'down' ? 'down' : 'up'
        break
      case 'ArrowDown':
        direction = direction === 'up' ? 'up' : 'down'
        break
    }
  }
}

function handleDirection() {
  snake.unshift(playerIndex)
  snake = snake.slice(0, foodEaten)

  switch(direction) {
    case 'right':
      if (playerIndex % width < width - 1) {
        playerIndex++
      } else {
        clearBoard()
        playerShouldMove = false
      }
      break
    case 'left':
      if (playerIndex % width > 0) {
        playerIndex--
      } else {
        clearBoard()
        playerShouldMove = false
      }
      break
    case 'up':
      if (playerIndex - width >= 0) {
        playerIndex -= width
      } else {
        clearBoard()
        playerShouldMove = false
      }
      break
    case 'down':
      if (playerIndex + width < width * width) {
        playerIndex += width
      } else {
        clearBoard()
        playerShouldMove = false
      }
      break
  }
  if (gameInPlay && playerShouldMove) {
    movePlayer()
  }

  // when foodEaten is 12, change the speed
  if (foodEaten === 12) {
    speed = 200
  }
  setTimeout(handleDirection, speed)

  //game over if snake crashes into itslef
  if (snake.slice(1).includes(playerIndex)) {
    clearBoard()
  }
}

function movePlayer() {
  squares.forEach(square => square.classList.remove('player'))
  if (squares[playerIndex].classList.contains('food')) {
    sound.src = newSound()
    sound.play()
    score()
    // highScore()
    squares[playerIndex].classList.remove('food')
    foodEaten++
    newFood()
  }

  //snake getting bigger when eating food
  squares[playerIndex].classList.add('player')
  for (let i = 0; i < snake.length; i++) {
    squares[snake[i]].classList.add('player')
  }
}

//new food generating at random
function newFood() {
  const imageUrl = changePic()
  let newSquare = squares[Math.floor(Math.random() * width * width)]
  while (snake.includes(squares.indexOf(newSquare))) {
    // console.log('snake includes newSquare')
    newSquare = squares[Math.floor(Math.random() * width * width)]
    // console.log('picking new square')
  }
  newSquare.classList.add('food', imageUrl)
}

//function to change the food photos
function changePic() {
  const foodPics = ['food-one', 'food-two', 'food-three', 'food-four', 'food-five', 'food-six', 'food-seven']
  return foodPics[Math.floor(Math.random() * foodPics.length)]
}

//score function
function score() {
  console.log('score')
  playerScore++
  playerScoreBoard.innerHTML = playerScore
  result.innerHTML
}

// function highScore() {
//   if (score

//food gets eaten noises
function newSound() {
  const sound = ['assets/Whoah-NiceOne-Studio.wav', 'assets/TastesLikeChicken.wav', 'assets/PiquantWithAPleasantCrunch.wav', 'assets/SlimyYetSatisfyingSimba.wav', 'assets/SlimyYetSatisfyingPumbaa.wav', 'assets/Eeew-Gross-Studio.wav']
  return sound[Math.floor(Math.random() * sound.length)]
}

//clear board when snake hits grid
function clearBoard() {
  gameInPlay = false
  const grid = document.querySelector('.grid')
  const overlay = document.querySelector('.overlay')
  overlay.classList.add('show')
  grid.innerHTML = ''
}

function init() {
  const resetButton = document.querySelector('#PlayAgain')
  resetButton.addEventListener('click', () => {
    location.reload()
  })



  // querySelector for start button
  // start button - addEventListener on click
  // change css for start screen to display: none
  // run handleDirection() function to enable game play -- move to here from line 89

  const grid = document.querySelector('.grid')
  console.log(grid)
  playerScoreBoard = document.querySelector('#playerScore')
  sound = document.querySelector('.sound')
  // song = document.querySelector('.song')




  // highScore = document.querySelector('.result')

  // used a for loop to fill my grid with individual squares, as many as the width times the width
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    squares.push(square)
    grid.append(square)
    //defining grid
  }
  squares[playerIndex].classList.add('player')

  const startScreen = document.querySelector('.start-screen')
  const gridItem = document.querySelectorAll('.grid-item')

  const startButton = document.querySelector('#start')
  startButton.addEventListener('click', () => {
    gameInPlay = true
    handleDirection()
    // song.play()
    startScreen.style.display = 'none'
    gridItem.forEach(item => item.style.display = 'block')
  })

  newFood()

  window.addEventListener('keydown', handleKeyDown)
  // window.addEventListener('click', () => song.play())

}

window.addEventListener('DOMContentLoaded', init)
