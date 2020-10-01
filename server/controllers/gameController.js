const gameController = {};

const wordsArr = [
  "man",
  "dog",
  "cat",
  "japan",
  "map",
  "car",
  "bear",
  "city",
  "brush",
  "water",
];
let urlLink;

gameController.startGame = (io) => {
  let wordToUse = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  console.log(wordToUse);

    urlLink = `https://source.unsplash.com/random/1200×1000/?${wordToUse}`;

    io.emit("pass word", wordToUse);
    io.emit("pass url", urlLink);
};

module.exports = gameController;
