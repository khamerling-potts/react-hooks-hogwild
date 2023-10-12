import React, { useState } from "react";

function PorkerTile({ hog }) {
  const [isClicked, setIsClicked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const details = (
    <>
      <p>Specialty: {hog.specialty}</p>
      <p>Weight: {hog.weight}</p>
      <p>Highest medal achieved: {hog["highest medal achieved"]}</p>
      <p>{hog.greased ? "Greased" : null}</p>
    </>
  );

  function handleTileClick() {
    setIsClicked((isClicked) => !isClicked);
  }

  function handleHide() {
    setHidden((hidden) => !hidden);
  }

  return (
    <div
      className="ui eight wide column"
      onClick={handleTileClick}
      style={{
        border: "2px solid black",
        display: hidden ? "none" : "block",
      }}
    >
      <button onClick={handleHide}>Hide</button>
      <h3>{hog.name}</h3>
      <img width={250} src={hog.image}></img>
      {isClicked ? details : null}
    </div>
  );
}

export default PorkerTile;
