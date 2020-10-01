import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";
import socket from '../socket'

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	updateUsers: (userList) => dispatch(actions.updateUsers(userList)),
	setCurUser: (username) => dispatch(actions.setCurUser(username)),
});


const Login = (props) => {

	const clickHandler = (e) => {
		e.preventDefault();
		const username = document.querySelector("#username").value;
		props.setCurUser(username);
		socket.emit("user", { username, score: 0, socket: socket.id });
		document.getElementById("username").value = "";
	};

	useEffect(()=> {
		socket.on("userList", (userList) => {
			props.updateUsers(userList);
		});
	})

	return (
		<div>
			<form>
			<input type="text" id="username" placeholder="Enter username here" />
			<button key={"button1"} onClick={(e) => clickHandler(e)}>
				Submit
      </button>
			</form>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
