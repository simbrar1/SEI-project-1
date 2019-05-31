const width = 10
const squares = []
let playerIndex = Math.floor(width * width / 2)
const foodIndex = 5
// use math.floo for player to start on the 12th sq. Or just put 0 for them to start at 0

function movePlayer() {
  squares.forEach(square => square.classList.remove('player'))
  squares[playerIndex].classList.add('player')
  squares[foodIndex].classList.add('food')

  // console.log(`player hsowuld move position ${playerIndex}`)
}

function handleKeyDown(e) {
  let playerShouldMove = true
  console.log(e.keyCode)

  switch(e.keyCode) {
    case 39:
      if (playerIndex % width < width - 1) {
        playerIndex++
      }
      break
    case 37:
      if (playerIndex % width > 0) {
        playerIndex--
      }
      break
    case 38:
      if (playerIndex - width >= 0) {
        playerIndex -= width
      }
      break
    case 40:
      if (playerIndex + width < width * width) {
        playerIndex += width
      }
      break
    default:
      playerShouldMove = false
  }
  if (playerShouldMove) movePlayer()
}

function init() {
  //  our code goes here

  //get hold of that parent grid div
  const grid = document.querySelector('.grid')
  console.log(grid)

  //used a for loop to fill my grid with individual squares, as many as the width times the width
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    // square.innerHTML = i
    squares.push(square)
    grid.append(square)

  }
  squares[playerIndex].classList.add('player')
  squares[foodIndex].classList.add('food')
  window.addEventListener('keydown', handleKeyDown)

}

window.addEventListener('DOMContentLoaded', init)
