const togglePlayer = () => {
  board.currentPlayer = board.currentPlayer === 'X' ? 'O' : 'X'
}

const setMarker = (e) => {
  const board = document.querySelector('#board')
  e.target.children[0]
    ? (e.target.children[0].innerText = board.currentPlayer)
    : (e.target.innerText = board.currentPlayer)
  togglePlayer(board)
}

export const setup = (cells) => {
  // clear board
  for (const cell of cells) {
    cell.children[0].innerText = ''
    cell.addEventListener('click', setMarker, { once: true })
  }
  // return random starting player
  return Math.floor(Math.random() * 2) ? 'X' : 'O'
}
