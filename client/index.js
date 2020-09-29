import React from 'react';
import { createStore } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reducer from './reducer.js';
import App from "./App.jsx"

const reducers = createStore(reducer)

ReactDOM.render(
	<Provider store={reducers}>
		<App />
	</Provider>,
	document.getElementById('root')
)