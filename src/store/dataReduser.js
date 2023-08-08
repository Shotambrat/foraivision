const initialState = {
    content: [],
};

export const dataReducer= (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CONTENT':
            return { ...state, content: action.payload };
        default:
            return state;
    }
}