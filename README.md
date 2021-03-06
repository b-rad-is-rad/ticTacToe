# Tic Tac Toe

Designing and building a tic tac toe game from scratch with no tutorials or starter code.

## Requirements

- 3 X's or O's in a row wins the Game
  - Vertical
  - Horizontal
  - Diagonal
- 3x3 board (9 spaces)
- Each space can only be used once
- Randomly assign if X or O goes first
- Winning the game disables the game and allows for reset
- When a tie has occurred, disables the game and allows for reset
- X and O alternate turns
- Clicking in a space assigns the space and starts next turn

## Styling

- Animation on click for X's and O's
- Animation/change when game is over
- Animation line drawn through 3 connecting X's or O's
  - Look up center x,y window position of middle cell (cell with X or Y === 2)
  - Set absolute position and rotation of line based on the 3 connected cells
  - Transform line length from 0 to some length and transition/animate
- Clearly show which player won
- Clean / user friendly design
