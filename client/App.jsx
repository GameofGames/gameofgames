import React, { Component } from "react";
import MessageBoard from './components/MessageBoard'
import Login from './components/login.jsx';
import GameDisplay from './components/gameDisplay.jsx';

class App extends Component {
	render() {
		return (
			<div>
				<div>hello world</div>
				<Login />
				<GameDisplay />
				<MessageBoard/>
			</div>
		)
	}
}

export default App;