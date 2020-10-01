import React, { Component } from "react";
import MainContainer from './components/mainContainer'
import Login from './components/login.jsx';



class App extends Component {
	render() {
		return (
			<div>
				<Login />
				<MainContainer />
			</div>
		)
	}
}

export default App;