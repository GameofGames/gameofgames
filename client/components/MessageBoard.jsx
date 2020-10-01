import React, { useEffect, Component } from "react";
import socket from "../socket";
// const chatMessages = document.getElementsByClassName("messages1");

const MessageBoard = React.memo((props) => {
  const answer = props.word;

  const clickHandler = (e) => {
    e.preventDefault(); // prevents screen from reloading
    let value = document.getElementById("m").value; // the message that is input
    //logic for checking if value === answer
    if (value === answer) {
      // obfuscate answer to send to server
      value = "thats the correct answer!";
      // add points to user that answered it
      socket.emit("nextPic", true);
      socket.emit("updateUserPoint", props.curUser);
    }
    socket.emit("msg", {name: props.curUser,value}); // emits message to server
    document.getElementById("m").value = ""; // then clear out input field
  };

  useEffect(() => {
    socket.on("chat message", function (msg) {
      // listening for server broadcasts whenever someone sends a message
      const messages = document.querySelector("#messages");
      const text = document.createElement("div"); //then create a lxist item to append to chat box with the new message
      text.innerText = `${msg}`;
      text.classList.add("testMessage");
      messages.appendChild(text);
    });
  }, []);

  // chatMessages.scrollTop = chatMessages.scrollHeight;
  return (
    <div className="messageBoard">
      <div className="testing">
        <h4 className="columnTitle">Message Board</h4>

        <h4 id="messages" className="messages1"></h4>
      </div>
      <div className="innerMessage">
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
    </div>
  );
});

export default MessageBoard;
