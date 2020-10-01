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

userController.addPoint = (username) => {
	console.log("inside addPoint", username);
	let userList = JSON.parse(fs.readFileSync(db))

	let newUserList = userList.map((user) => {
		if(user.username === username){
			user.score += 1;
		}
	console.log("user is", user)
	return user;
	});
	
	
	fs.writeFileSync(db, JSON.stringify(newUserList))
	return JSON.parse(fs.readFileSync(db));
};



module.exports = userController;