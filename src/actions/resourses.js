import axios from "axios";


export const FETCH_RESOURCES_REQUEST = 'FETCH_RESOURCES_REQUEST';
export const FETCH_RESOURCES_SUCCESS = 'FETCH_RESOURCES_SUCCESS';
export const FETCH_RESOURCES_FAILURE = 'FETCH_RESOURCES_FAILURE';

export const fetchResources = ( token ) => {
    return async dispatch => {
        try {
            dispatch({ type: FETCH_RESOURCES_REQUEST });
            const response = await axios.get('https://cloud-api.yandex.net/v1/disk/resources', {
                headers: {
                    'Authorization': `OAuth ${token}`,
                },
            });
            dispatch({ type: 'FETCH_RESOURCES_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_RESOURCES_ERROR', payload: error.message });
        }
    };
};