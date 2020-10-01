const gameController = {};

const wordsArr = ["man", "dog", "cat", "japan", "map", "car", "bear", "city", "brush", "water"]
	let urlLink
	let cache = {}


gameController.startGame = (io) => {
	let wordToUse = wordsArr[Math.floor((Math.random() * wordsArr.length))]
	console.log(wordToUse)
	//cache to make sure that the pictures do not repeat itself
	if (!cache[wordToUse]) {
		cache[wordToUse] = 1;
	
		urlLink = `https://source.unsplash.com/random/1200×1000/?${wordToUse}`

    io.emit('pass word', wordToUse);
    io.emit('pass url', urlLink);
		console.log(cache)
  }
  else {
    gameController.startGame();
  }
};


module.exports = gameController;