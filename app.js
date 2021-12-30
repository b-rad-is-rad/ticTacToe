import { startGame } from './lib.js'
const cells = document.querySelectorAll('.cell')
const board = document.querySelector('#board')

startGame(board,cells)
