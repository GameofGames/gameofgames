import React, { useState } from "react";
import { connect } from 'react-redux';

import io from 'socket.io-client'


const mapStateToProps = (state) => ({
	// usersList: state.usersList,
});


const socket = io.connect('http://localhost:3000', { transports: ['websocket'] });

const Lobby = (props) => {
	const [time, setTime] = useState()

	socket.on('lobby', (sec) => {
		setTime(sec)
	})

	return (
		<h1>TIME LEFT: {time}</h1>
	)
}

export default connect(mapStateToProps)(Lobby)