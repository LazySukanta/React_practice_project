import { useState } from "react"

const Player = ({ initialName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  function handleEditClick() {
    setIsEditing((prev) => !prev)
  }
  function handleChange(e) {
    setPlayerName(e.target.value)
  }

  return (
    <li>
      <span className="player">
        {
          isEditing ?
            <input
              Value={playerName}
              type="text"
              required
              onChange={handleChange}
            /> :
            <span className="player-name">{playerName}</span>
        }

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick} >{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}

export default Player