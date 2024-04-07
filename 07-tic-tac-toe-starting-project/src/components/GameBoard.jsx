
const GameBoard = ({ onSelectSquare, board }) => {
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


  return (
    <ol id="game-board">
      {board.map((row, rowIndex) =>
        <li key={rowIndex} >
          <ol>
            {
              row.map((playerSymbol, colIndex) =>
                <li key={colIndex}>
                  <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null} >{playerSymbol}</button>
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