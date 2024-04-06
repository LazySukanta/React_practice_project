
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
const GameBoard = ({ onSelectSquare, turns }) => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard)
  // function handleSelect(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol
  //     return updatedGameBoard;
  //   })
  //   //toggling the active player
  //   onSelectSquare();
  // }
  let gameBoard = initialGameBoard
  for (const turn of turns) {
    const { square, player } = turn
    const {row,col} = square
    gameBoard[row][col] = player
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) =>
        <li key={rowIndex} >
          <ol>
            {
              row.map((playerSymbol, colIndex) =>
                <li key={colIndex}>
                  <button onClick={() => onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                </li>
              )
            }
          </ol>
        </li>
      )}
    </ol>
  )
}

export default GameBoard