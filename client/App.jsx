import React, { Component } from "react";
import Login from './components/login.jsx';
import GameDisplay from './components/gameDisplay.jsx';

class App extends Component {
	render () {
		return (
			<div>
				<div>hello world</div>
				<Login />
				<GameDisplay />
			</div>
		)
	}
}

export default App;