const togglePlayer = (board) => {
  board.currentPlayer = board.currentPlayer === 'X' ? 'O' : 'X'
}

const endGame = (currentPlayer) => {
    if (currentPlayer) {
        console.log(`${currentPlayer} won the game!`)
    } else {
        console.log(`It's a tie!`)
    }
}

const winner = (currentCell) => {
  console.dir(currentCell)
  return true
}

const setMarker = (e) => {
  const board = document.querySelector('#board')
  board.totalTurns++
  let currentCell
  // set marker
  if (e.target.children[0]) {
    e.target.children[0].innerText = board.currentPlayer
    currentCell = e.target
  } else {
    e.target.innerText = board.currentPlayer
    currentCell = e.target.parentNode
  }
  // check for endGame() condition, earliest game can end is turn 5
  if (board.totalTurns >= 5) {
    if (winner(currentCell)) {
      endGame(board.currentPlayer)
    } else {
      if (board.totalTurns === 9) {
        endGame()
      } else {
        togglePlayer(board)
      }
    }
  } else {
    togglePlayer(board)
  }
}

export const startGame = (board, cells) => {
  let x = 1
  let y = 3
  // initialize board
  for (const cell of cells) {
    cell.children[0].innerText = ''
    cell.addEventListener('click', setMarker, { once: true })
    cell.gameX = x
    cell.gameY = y
    if (x === 3) {
      x = 1
      y--
    } else {
      x++
    }
  }
  board.currentPlayer = Math.floor(Math.random() * 2) ? 'X' : 'O'
  board.totalTurns = 0
}
