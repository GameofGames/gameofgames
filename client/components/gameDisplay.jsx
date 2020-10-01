//where the zoomed in pictures will be displayed, switching it out every 1 minute to a new picture

import React, { useState, useEffect } from "react";
import socket from '../socket'


const GameDisplay = React.memo((props) => {
  const [uri, setURI] = useState();
  // socket.removeListener()

useEffect(() => {
  socket.off("pass word").on("pass word", (value) => {
    console.log("WORD", value);
    props.addWord(value);
  });

  socket.off('pass url').on("pass url", (value) => {
    console.log("URL", value);
    setURI(value);
	});

})

  const styleSheet = {
    position: "absolute",
    clip: "rect(200px, 600px, 600px, 200px)",
	};

  return (
    <div className="gameDisplay">
      <h4 className="columnTitle"> Guess This Picture</h4>
      <img className="picture" src={uri}></img>
      {/* <div style={styleSheet}>
        <img src={uri} />
      </div> */}
    </div>
  );
});

export default GameDisplay;
