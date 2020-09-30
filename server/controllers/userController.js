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





module.exports = userController;