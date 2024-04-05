import { useState } from "react"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard)
  function handleSelect(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
      updatedGameBoard[rowIndex][colIndex] = 'X'
      return updatedGameBoard;
    })
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) =>
        <li key={rowIndex} >
          <ol>
            {
              row.map((playerSymbol, colIndex) =>
                <li key={colIndex}>
                  <button onClick={() => handleSelect(rowIndex, colIndex)}>{playerSymbol}</button>
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