const initialState = [];

const filesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FILES':
            return [...state, ...action.payload];
        default:
            return state;
    }
};

export default filesReducer;