import React from "react";

// const mapStateToProps = (state) => ({
// 	usersList: state.usersList,
// });

//function to grab the value (username) from the input box upon submit 
//update global store with those usernames 

// Grabbing the input database ID and updating local state

const ScoreBoard = React.memo((props) => {



	let newUserName = [];
	for (let i = 0; i < props.usersList.length; i++) {
		// console.log("props.userList", props.usersList)
		newUserName.push(<h1 key={i}>{props.usersList[i].username} : {props.usersList[i].score}</h1>)
		// console.log("newUserName", newUserName)
		console.log("props.usersList[i].username", props.usersList[i].username)
	}
	// newUserName.push(props.usersList[0].username)
	// console.log(newUserName)

	return (
		<div>
			<h4>User List Goes Here</h4>
			{newUserName}
		</div>
	)
})

export default ScoreBoard;