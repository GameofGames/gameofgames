import React, { Component } from "react";
import io from 'socket.io-client';


function MessageBoard(props) {

  const socket = io.connect('http://localhost:3000');
  console.log(socket)
  socket.on('msg', 'hello')

  const clickHandler = (e) => {
    e.preventDefault();
    const value = document.getElementById('m').value;
    console.log(value);
    socket.emit('msg', value);
    document.getElementById('m').value = ''
  }
  socket.on('chat message', function (msg) {
    const messages = document.querySelector('#messages');
    const text = document.createElement('li')
    text.innerText = `${msg}`;
    messages.appendChild(text);
  })

  // const form = document.querySelector('form');
  // form.addEventListener('submit', (e) => {
  //     e.preventDefault();
  //     socket.emit('msg', e.target.value);
  //     document.querySelector('#m').value = '';
  //     return false;
  // });
  // $('form').submit(function(e) {
  //   e.preventDefault(); // prevents page reloading
  //   // emitting event called 'chat message' from this socket
  //   socket.emit('msg', $('#m').val());
  //   $('#m').val('');
  //   return false;
  // });
  // socket.on('chat message', function(msg){
  //   $('#messages').append($('<li>').text(msg));
  // });


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