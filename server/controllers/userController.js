//userController.addUser(user)

const fs = require('fs');
const db = `${__dirname}/db.json`

const userController = {};

userController.addUser = (user) => {
	// return userList.push(user);
	let userList = JSON.parse(fs.readFileSync(db))
	userList.push(user)
	fs.writeFileSync(db, JSON.stringify(userList));
	return JSON.parse(fs.readFileSync(db))
};

userController.addPoint = (username, io) => {
	let userList = JSON.parse(fs.readFileSync(db))

	for (let user of userList) {
		if (user.username == username) {
			user.score += 1;
			if (user.score >= 5) {
				console.log('winner is ', user);
				// return the userlist but also emit WINNER
				io.emit('winner', user)
			}
			break;
		}
	}
	fs.writeFileSync(db, JSON.stringify(userList))
	return JSON.parse(fs.readFileSync(db));
};



module.exports = userController;