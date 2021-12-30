const cells = document.querySelectorAll('.cell')

const togglePlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

const setMarker = (e) => {
    e.target.children[0] ? e.target.children[0].innerText = currentPlayer : e.target.innerText = currentPlayer
    togglePlayer()
}

const setup = () => {
  // clear board
  for (const cell of cells) {
    cell.children[0].innerText = ''
    cell.addEventListener('click', setMarker, {once: true, })
  }

  // return random starting player
  return Math.floor(Math.random() * 2) ? 'X' : 'O'
}

let currentPlayer = setup()
