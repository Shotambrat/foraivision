const initialState = [];

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PHOTOS':
            return [...state, ...action.payload];
        default:
            return state;
    }
};

export default photosReducer;