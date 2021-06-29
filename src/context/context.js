import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';
const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
	const [ transactions, dispatch ] = useReducer(contextReducer, initialState);
	////console.log(transactions);
	//Action Creators
	const deleteTrans = (id) => {
		dispatch({ type: 'DELETE_TRANSACTION', payload: id });
	};

	const addTrans = (trans) => {
		dispatch({ type: 'ADD_TRANSACTION', payload: trans });
	};
	return (
		<ExpenseTrackerContext.Provider
			value={{
				deleteTrans,
				addTrans,
				transactions
			}}
		>
			{children}
		</ExpenseTrackerContext.Provider>
	);
};
