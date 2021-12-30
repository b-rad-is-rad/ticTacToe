import { setup } from './lib.js'
const cells = document.querySelectorAll('.cell')
const board = document.querySelector('#board')

board.currentPlayer = setup(cells)
