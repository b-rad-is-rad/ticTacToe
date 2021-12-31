const togglePlayer = board => {
  board.currentPlayer = board.currentPlayer === 'X' ? 'O' : 'X'
}

const endGame = (cells, board) => {
  // grey out board
  board.classList.toggle('gameOver')
  for (const cell of cells) cell.classList.toggle('gameOver')
  const rows = document.querySelectorAll('.row')
  for (const row of rows) row.classList.toggle('gameOver')

  // display winner / tie msg
  if (board.currentPlayer) {
    console.log(`${board.currentPlayer} won the game!`)
    for (const cell of cells) {
      if (cell.children[0].innerText === '') cell.removeEventListener('click', setMarker)
    }
  } else {
    console.log(`It's a tie!`)
  }
}

const checkDirection = (cellsArr, filter) => {
  return cellsArr
    .filter(filter)
    .map(el => el.children[0].innerText)
    .every(el => el === board.currentPlayer)
}

// check to see if the current player won the game
const winCond = (cells, currentCell) => {
  const cellsArr = Array.from(cells)
  // Check Directions for 3 in a row
  const rowWin = checkDirection(cellsArr, el => el.gameY === currentCell.gameY)
  const vertWin = checkDirection(cellsArr, el => el.gameX === currentCell.gameX)
  // Only check the diags you need to
  const onDiag = (currentCell.gameX - 2) / (currentCell.gameY - 2)
  const diagPosWin = onDiag > 0 || isNaN(onDiag) ? checkDirection(cellsArr, el => el.gameX === el.gameY) : false
  const diagNegWin = onDiag < 0 || isNaN(onDiag) ? checkDirection(cellsArr, el => el.gameX === 4 - el.gameY) : false

  return rowWin || vertWin || diagPosWin || diagNegWin
}

const setMarker = e => {
  const board = document.querySelector('#board')
  const cells = document.querySelectorAll('.cell')
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
    if (winCond(cells, currentCell)) {
      endGame(cells, board)
    } else {
      if (board.totalTurns === 9) {
        endGame(cells)
      } else {
        togglePlayer(board)
      }
    }
  } else {
    togglePlayer(board)
  }
}

// init board
export const startGame = (board, cells) => {
  let x = 1
  let y = 3
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
