import * as types from './actionTypes.js';

export const addUser = (newUser) => ({
	type: types.ADD_USER,
	payload: newUser,
});

// add more action creators
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
