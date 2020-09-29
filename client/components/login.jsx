import React from "react";
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';


const mapDispatchToProps = (dispatch) => ({
	addUsername: (newUser) => dispatch(actions.addUser(newUser)),
});

//function to grab the value (username) from the input box upon submit 
//update global store with those usernames 

const Login = () => {
	return (
		<div>
			<form>
				<label for="exampleInputEmail1">Enter Username</label>
				<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username here"></input>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		</div>
	)
}

export default connect(mapDispatchToProps)(Login);