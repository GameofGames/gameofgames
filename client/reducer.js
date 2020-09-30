import * as types from './actions/actionTypes.js'

function reducer (state = { usersList: [], round: 0, word: '' }, action) {
	let newUsersList;

	switch (action.type) {
		case types.UPDATE_USERS:
			newUsersList = action.payload;
			return {
				...state,
				usersList: newUsersList,
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

		case types.ADD_WORD:
			const newWord = action.payload
			return {
				...state,
				word: newWord,
			}

		default:
			return state;
	}
}

export default reducer;