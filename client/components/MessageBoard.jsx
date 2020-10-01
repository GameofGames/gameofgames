import React, { Component } from "react";
import io from "socket.io-client";

const MessageBoard = React.memo((props) => {
  const answer = props.word;
  const socket = io.connect("http://localhost:3000", {
    transports: ["websocket"],
  }); // defaults to window.location but since we are on 8080 we set to 3000

  const clickHandler = (e) => {
    e.preventDefault(); // prevents screen from reloading
    let value = document.getElementById("m").value; // the message that is input
    //logic for checking if value === answer
    if (value === answer) {
      // obfuscate answer to send to server
      value = "thats the correct answer!";
      // add points to user that answered it
      //what does their add point action look like?
    }
    socket.emit("msg", value); // emits message to server
    document.getElementById("m").value = ""; // then clear out input field
  };
  socket.removeAllListeners();
  socket.on("chat message", function (msg) {
    // listening for server broadcasts whenever someone sends a message
    const messages = document.querySelector("#messages");
    const text = document.createElement("li"); //then create a list item to append to chat box with the new message
    text.innerText = `${msg}`;
    messages.appendChild(text);
  });

  return (
    <div className="messageBoard">
      <div className="testing">
        <h4 className="columnTitle">Message Board</h4>

        <ul id="messages" className="messages"></ul>
      </div>
      <form className="inputMessage">
        <input id="m" placeholder="Enter Your Answer" />
        <button
          className="send"
          onClick={(e) => {
            clickHandler(e);
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
});

export default MessageBoard;
