import * as types from './actionTypes.js';

export const updateUsers = (userList) => ({
	type: types.UPDATE_USERS,
	payload: userList,
});

export const addRound = (roundNum) => ({
	type: types.ADD_ROUND,
	payload: roundNum,
});

export const addPoint = (index) => ({
	type: types.ADD_POINT,
	payload: index,
});

export const addWord = (word) => ({
	type: types.ADD_WORD,
	payload: word,
})

export const setCurUser = (username) => ({
	type: types.SET_CUR_USER,
	payload: username,
})
