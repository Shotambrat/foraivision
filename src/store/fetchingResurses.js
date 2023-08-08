const initialState = {
    resources: [],
    loading: false,
    error: null
};

export const resourcesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_RESOURCES_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_RESOURCES_SUCCESS':
            return { ...state, loading: false, resources: action.payload };
        case 'FETCH_RESOURCES_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};