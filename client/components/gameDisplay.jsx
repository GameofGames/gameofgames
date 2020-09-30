//where the zoomed in pictures will be displayed, switching it out every 1 minute to a new picture

import React, { useState, useEffect } from "react";
import io from 'socket.io-client';

const GameDisplay = (props) => {
	const socket = io.connect('http://localhost:3000', { transports: ['websocket'] });       // defaults to window.location but since we are on 8080 we set to 3000

	const [newPic, setNewPic] = useState();
	// const [word, setNewWord] = useState();

	const wordsArr = ["man", "dog", "cat", "japan", "map", "car", "bear", "city", "brush", "water"]

	let urlLink
	let cache = {}

	function wordToStore() {
		let wordToUse = wordsArr[Math.floor((Math.random() * 6))]
		console.log(wordToUse)

		//cache to make sure that the pictures do not repeat itself
		if (!cache[wordToUse]) {
			cache[wordToUse] = 1;
			props.addWord(wordToUse)
			urlLink = `https://source.unsplash.com/random/1200×1000/?${wordToUse}`
			fetch(urlLink)
				.then((response) => {
					console.log("we are in the fetch response", response)
					let picture = response.url
					console.log("picture", picture)
					setNewPic(picture)
				})
			console.log(cache)
		} else {
			wordToStore()
		}
	}

	const styleSheet = {
		// "width": "100px",
		// "height": "100px",
		// "position": "absolute"
		"position": 'absolute',
		"clip": "rect(200px, 600px, 600px, 200px)",
	}

	function startPicture() {
		let numTimes = 0;
		let interval = setInterval(function () {
			wordToStore()

			numTimes += 1

			if (numTimes === 4) {
				clearInterval(interval)
			}
		}, 4000)
	}


	return (
		<div>
			<h3>Display Game</h3>
			<button onClick={startPicture}>click me</button>
			<div style={styleSheet}><img src={newPic} /></div>
		</div>
	)
}

export default GameDisplay