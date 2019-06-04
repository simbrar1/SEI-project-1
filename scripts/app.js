const width = 10
const squares = []
let playerIndex = Math.floor(width * width / 2)
let direction = null
// use math.floor for player to start on the 12th sq. Or just put 0 for them to start at 0
let playerShouldMove = false
let playerScore = 0
const snake = [1]
let playerScoreBoard = null
//let highScore = null
// const sound = document.querySelector('.sound')

function movePlayer() {
  squares.forEach(square => square.classList.remove('player'))
  if (squares[playerIndex].classList.contains('food')) {
    // sound.src = '../assets/Whoah-NiceOne-Studio.wav'
    // sound.play()
    score()
    squares[playerIndex].classList.remove('food')
    newFood()
  }
  squares[playerIndex].classList.add('player')
}

function newFood() {
  const imageUrl = changePic()
  const newSquare = squares[Math.floor(Math.random() * width * width)]
  newSquare.classList.add('food', imageUrl)
}

function changePic() {
  const foodPics = ['food-one', 'food-two', 'food-three', 'food-four', 'food-five', 'food-six', 'food-seven']
  return foodPics[Math.floor(Math.random() * foodPics.length)]
}

function score() {
  console.log('score')
  playerScore++
  playerScoreBoard.innerHTML = playerScore
  // result.innerHTML
}

function handleKeyDown(e) {
  //console.log(e.keyCode)
  playerShouldMove = true
  switch(e.key) {
    case 'ArrowRight':
      direction = 'right'
      break
    case 'ArrowLeft':
      direction = 'left'
      break
    case 'ArrowUp':
      direction = 'up'
      break
    case 'ArrowDown':
      direction = 'down'
      break
  }
  if (playerShouldMove) movePlayer()
}

function handleDirection() {
  switch(direction) {
    case 'right':
      if (playerIndex % width < width - 1) {
        playerIndex++
      }
      break
    case 'left':
      if (playerIndex % width > 0) {
        playerIndex--
      }
      break
    case 'up':
      if (playerIndex - width >= 0) {
        playerIndex -= width
      }
      break
    case 'down':
      if (playerIndex + width < width * width) {
        playerIndex += width
      }
      break
  }
  if (playerShouldMove) movePlayer()
}

setInterval(handleDirection, 300)

function init() {
  const grid = document.querySelector('.grid')
  console.log(grid)
  playerScoreBoard = document.querySelector('#playerScore')
  // highScore = document.querySelector('.result')

  // used a for loop to fill my grid with individual squares, as many as the width times the width
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    squares.push(square)
    grid.append(square)

  }
  squares[snake[0]].classList.add('player')

  squares.forEach((square, index) => {
    if (snake.includes(index)) square.classList.add('player')
  })
  newFood()
  window.addEventListener('keydown', handleKeyDown)
}

window.addEventListener('DOMContentLoaded', init)
