const width = 10
const squares = []
let playerIndex = Math.floor(width * width / 2)
let direction = null
// use math.floor for player to start on the 12th sq. Or just put 0 for them to start at 0
let playerShouldMove = false
let playerScore = 0
let playerScoreBoard = null
//let highScore = null

function movePlayer() {
  squares.forEach(square => square.classList.remove('player'))
  if (squares[playerIndex].classList.contains('food')) {
    score()
    squares[playerIndex].classList.remove('food')
    newFood()
  }
  squares[playerIndex].classList.add('player')
  // snakeBigger(playerIndex)
}

function changePic() {
  const foodPics = ['food-one', 'food-two', 'food-three', 'food-four', 'food-five', 'food-six', 'food-seven']
  return foodPics[Math.floor(Math.random() * foodPics.length)]
}


function newFood() {
  const randomIndex = Math.floor(Math.random() * squares.length)
  while(squares[randomIndex].classList.contains('playerIndex')) {
    squares[randomIndex].classList.add('fuel')
  }
  const imageUrl = changePic()
  const newSquare = squares[Math.floor(Math.random() * width * width)]
  newSquare.classList.add('food', imageUrl)
}


function score() {
  console.log('score')
  playerScore++
  playerScoreBoard.innerHTML = playerScore
  // result.innerHTML
}

// function snakeBigger(playerIndex) {
//   return squares.forEach((square) => {
//     // console.log(typeof square)
//     if (square.className === 'grid-item player') {
//       square[playerIndex+1].classList.add('player')
//     }
//   })
// }

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

// if (squares[playerIndex[0]].classList.contains('newFood')) {
//   squares[playerIndex[0]].classList.remove('newFood')
//   playerIndex.push(playerIndex[playerIndex.length-1])
//   newFood()
// }

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
  //get hold of that parent grid div
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
  squares[playerIndex].classList.add('player')
  newFood()
  window.addEventListener('keydown', handleKeyDown)
}

window.addEventListener('DOMContentLoaded', init)
