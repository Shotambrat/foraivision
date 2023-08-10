import axios from 'axios';

const clId= "507d4ceeed5c47c09060c1891eabf735";
const redirectUrl = "https://foraivision.vercel.app/";
const authUrl = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${clId}&redirect_uri=${redirectUrl}`;

export const getToken = () => {
    // .substr(1).split('&')
    // [0].split('=')[1]
    const hashParams = window.locationhash.substr(1).split('&');
    const accessToken = hashParams[0].split('=')[1];

    if (accessToken) {
        return Promise.resolve(accessToken);
    } else {
        window.location.href = authUrl;
        return Promise.reject();
    }
};

export const fetchUserData = async () => {
    let response = await axios.get('/api/resources');
    console.log(response.data)
    return response;
};
