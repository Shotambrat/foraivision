import axios from "axios";


export const getDiskContent = () => async (dispatch, getState) => {
    const token = getState().token;
    const response = await axios.get('https://cloud-api.yandex.net/v1/disk/resources', {
        headers: { Authorization: `OAuth ${token}` },
    });
    dispatch({ type: 'SET_CONTENT', payload: response.data.items });
};