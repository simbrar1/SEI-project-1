const width = 10
const squares = []
let playerIndex = Math.floor(width * width / 2)
const foodIndex = Math.floor(Math.random() * width * width)
// let futureIndex = 0
let direction = null
// use math.floor for player to start on the 12th sq. Or just put 0 for them to start at 0
let playerShouldMove = false

function movePlayer() {
  squares.forEach(square => square.classList.remove('player'))
  if (squares[playerIndex].classList.contains('food')) {
    squares[playerIndex].classList.remove('food')
    // you would wanna update the score the snake length etc
    // generate a new food in a random spot
  }
  squares[playerIndex].classList.add('player')
  // squares[foodIndex].classList.add('food')
  // console.log(`player should move position ${playerIndex}`)
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
    default:
      playerShouldMove = false
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

setInterval(handleDirection, 500)


function init() {
  //get hold of that parent grid div
  const grid = document.querySelector('.grid')
  console.log(grid)

  // used a for loop to fill my grid with individual squares, as many as the width times the width
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    square.innerHTML = i
    // square.innerHTML = `${i}, ${i % width}`
    squares.push(square)
    grid.append(square)

  }
  squares[playerIndex].classList.add('player')
  squares[foodIndex].classList.add('food')
  window.addEventListener('keydown', handleKeyDown)

}

window.addEventListener('DOMContentLoaded', init)
