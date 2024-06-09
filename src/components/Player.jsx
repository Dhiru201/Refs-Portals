import { useState, useRef } from "react";

export default function Player() {
  const playerNameField = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(playerNameField.current.value);
    playerNameField.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome { playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerNameField} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
