import React from "react";
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import io from 'socket.io-client'


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
	addUsername: (newUser) => dispatch(actions.addUser(newUser)),
});


const Login = (props) => {

	// 	const handleChange = (e) => {
	// 	console.log(e)
	// 	// props.addUsername(e.target.value);
	// 	alert("clicked")
	// }

	//function to grab the value (username) from the input box upon submit 
	//update global store with those usernames 

	// Grabbing the input database ID and updating local 
	const socket = io.connect('http://localhost:3000');       // defaults to window.location but since we are on 8080 we set to 3000


	const clickHandler = (e) => {
		e.preventDefault();
		const username = document.querySelector('#username').value
		socket.emit('user', username)
	}

	socket.on('newUser', (username) => {
		console.log('hit');
		// props.addUsername(username)
		console.log(username);
		console.log('end')
	})

	return (
		<div>
			<input type="text" id="username" placeholder="Enter username here" />
			<button key={'button1'} onClick={(e) => clickHandler(e)}>Submit</button>
			{/* <button key={'button1'} onClick={handleChange}>Submit</button> */}
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);