import * as types from './actions/actionTypes.js'

function reducer (state = { usersList: [], round: 0 }, action) {
	let usersList;

	switch (action.type) {
		case types.ADD_USER:
			const userStats = {
				username: newUser,
				score: 0,
			}
			usersList = state.usersList.slice()
			userList.push(userStats)
			return {
				...state,
				usersList,
			};

		case types.ADD_POINT:

			const totalPoints = state.userList[action.payload].score + 1;
			const copyUserList = [...state.userList]
			copyUserList[action.payload].score = totalPoints
			return {
				...state,
				userList: copyUserList
			};

		case types.ADD_ROUND:
			const curRound = state.round + 1
			const copyRound = [...state.round]
			copyRound = curRound
			return {
				...state,
				round: copyRound
			};

		default:
			return state;
	}
}

export default reducer;