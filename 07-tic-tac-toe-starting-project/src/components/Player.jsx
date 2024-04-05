import { useState } from "react"

const Player = ({ name, symbol }) => {
  const [isEditing, setEditing] = useState(false)

  return (
    <li>
      <span className="player">
        {isEditing ? <input type="text" /> : <span className="player-name">{name}</span>}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setEditing((prev) => !prev)} >{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}

export default Player