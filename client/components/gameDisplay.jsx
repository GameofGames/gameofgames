//where the zoomed in pictures will be displayed, switching it out every 1 minute to a new picture

import React, { useState, useEffect } from "react";

const GameDisplay = (props) => {
	const [newPic, setNewPic] = useState();
	// const [word, setNewWord] = useState();

	const wordsArr = ["man", "dog", "cat", "japan", "map", "car", "bear", "city", "brush", "water"]
	// const wordsArr = ['fruit', 'fruit', 'fruit', 'fruit', 'fruit', 'fruit', 'fruit', 'fruit', 'fruit', 'fruit']
	let urlLink

	function wordToStore () {
		let wordToUse = wordsArr[Math.floor((Math.random() * 10))]
		props.addWord(wordToUse)
		urlLink = `https://source.unsplash.com/random/900×700/?${wordToUse}`
		fetch(urlLink)
			.then((response) => {
				console.log("we are in the fetch response", response)
				let picture = response.url
				console.log("picture", picture)
				setNewPic(picture)
			})	}

	// useEffect(() => {
	// 	// fetch(urlLink)
	// 	// 	.then((response) => {
	// 	// 		console.log("we are in the fetch response", response)
	// 	// 		let picture = response.url
	// 	// 		console.log("picture", picture)
	// 	// 		setNewPic(picture)
	// 	// 	})
	// }, [])

	return (
		<div>
			<h3>Display Game</h3>
			<button onClick={wordToStore}>click me</button>
			<img src={newPic} />
		</div>
	)
}

export default GameDisplay