const contextReducer = (state, action) => {
    let transactions;

	switch (action.type) {
    case 'DELETE_TRANSACTION':
             transactions = state.filter((tra) => tra.id !== action.payload)

			return transactions
		case 'ADD_TRANSACTION':
             transactions = [action.payload, ...state]

            return transactions
		default:
			return state;
	}
};

export default contextReducer;

