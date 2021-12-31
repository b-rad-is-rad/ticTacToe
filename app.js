import { startGame } from './lib.js'
const cells = document.querySelectorAll('.cell')
const board = document.querySelector('#board')
const rows = document.querySelectorAll('.row')
const resetButton = document.querySelector('#reset')

const resetGame = e => {
  // Bring board back to white
  board.classList.toggle('gameOver')
  for (const cell of cells) cell.classList.toggle('gameOver')
  for (const row of rows) row.classList.toggle('gameOver')
  startGame(board, cells)
}
resetButton.addEventListener('click', resetGame)

startGame(board, cells)
