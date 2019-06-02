const width = 5
const squares = []
let playerIndex = Math.floor(width * width / 2)
const foodIndex = Math.floor(Math.random() * width * width)
let direction = null
// use math.floor for player to start on the 12th sq. Or just put 0 for them to start at 0
let playerShouldMove = false
const score = 0

function movePlayer() {
  squares.forEach(square => square.classList.remove('player'))
  if (squares[playerIndex].classList.contains('food')) {
    squares[playerIndex].classList.remove('food')
  }
  squares[playerIndex].classList.add('player')
}

// you need a function that will select a random square on your board and add the food class to it. The trickly part is when you need to call that function. It should go inside the if statement we wrote to know the previous food has been eaten.
//
// If you look at the way we selected a random choice in Rock paper scissors that should help
// But instead you will need to pick a random whole number between 0 and and the amount of squres on your board (the width time the width)

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
