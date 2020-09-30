import React, { Component } from "react";
import MainContainer from './components/mainContainer'
import Login from './components/login.jsx';
import Lobby from './components/Lobby.jsx';



class App extends Component {
	render() {
		return (
			<div>
				<Login />
				<Lobby />
				<MainContainer />
			</div>
		)
	}
}

export default App;