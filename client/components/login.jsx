import React from "react";
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';


const mapStateToProps = (state) => ({
	usersList: state.usersList
});
const mapDispatchToProps = (dispatch) => ({
	addUsername: (newUser) => dispatch(actions.addUser(newUser)),
});


const Login = (props) => (

	// 	const handleChange = (e) => {
	// 	console.log(e)
	// 	// props.addUsername(e.target.value);
	// 	alert("clicked")
	// }

	//function to grab the value (username) from the input box upon submit 
	//update global store with those usernames 

	// Grabbing the input database ID and updating local state
	<div>
		<input type="text" id="username" placeholder="Enter username here" />
		<button key={'button1'} onClick={() => props.addUsername(document.querySelector('#username').value)}>Submit</button>
		{/* <button key={'button1'} onClick={handleChange}>Submit</button> */}
	</div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Login);