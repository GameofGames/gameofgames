//where the zoomed in pictures will be displayed, switching it out every 1 minute to a new picture

import React, { useState, useEffect } from "react";
import socket from '../socket'



const GameDisplay = React.memo((props) => {
  const [uri, setURI] = useState();
  const [winner, setWinner] = useState();

  useEffect(() => {
    socket.off("pass word").on("pass word", (value) => {
      console.log("WORD", value);
      props.addWord(value);
    });

    socket.off('pass url').on("pass url", (value) => {
      setURI(value);
    });

    socket.off('winner').on("winner", (user) => {
      setWinner(user);
    });
  })


  const styleSheet = {
    position: "absolute",
    clip: "rect(200px, 600px, 600px, 200px)",
  };

  if (winner) {
    return (
      <div className='gameDisplay'>
        <h3>WINNER IS: </h3>
        <h1>{winner.username}</h1>
        <img src='https://media1.giphy.com/media/cOtvwSHKaFK3Ul1VVu/giphy.gif'></img>
      </div>
    )
  }
  if (!winner) {
    return (
      <div className="gameDisplay">
        <h4 className="columnTitle"> Guess This Picture</h4>
        <img className="picture" src={uri}></img>
        {/* <div style={styleSheet}>
        <img src={uri} />
      </div> */}
      </div>
    );
  }
});

export default GameDisplay;
