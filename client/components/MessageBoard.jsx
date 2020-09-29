import React, { Component } from "react";
import io from 'socket.io-client';


function MessageBoard(props) {

  const socket = io.connect('http://localhost:3000');       // defaults to window.location but since we are on 8080 we set to 3000

  const clickHandler = (e) => {
    e.preventDefault();                                     // prevents screen from reloading
    const value = document.getElementById('m').value;       // the message that is input 
    socket.emit('msg', value);                              // emits message to server
    document.getElementById('m').value = ''                 // then clear out input field
  }

  socket.on('chat message', function (msg) {                // listening for server broadcasts whenever someone sends a message
    const messages = document.querySelector('#messages');
    const text = document.createElement('li')               //then create a list item to append to chat box with the new message
    text.innerText = `${msg}`;
    messages.appendChild(text); 
  })

  return (
    <div>
      <div>Message Board</div>
      <ul id="messages"></ul>
      <form>
        <input id="m" /><button onClick={(e) => { clickHandler(e) }}>Send</button>
      </form>
    </div>
  )
}

export default MessageBoard;