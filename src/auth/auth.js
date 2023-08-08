import axios from 'axios';

const clId= "507d4ceeed5c47c09060c1891eabf735";
const redirectUrl = "https://foraivision.vercel.app/";
const authUrl = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${clId}&redirect_uri=${redirectUrl}`;

export const getToken = () => {
    // .substr(1).split('&')
    // [0].split('=')[1]
    const hashParams = window.location.hash.substr(1).split('&');
    const accessToken = hashParams[0].split('=')[1];

    if (accessToken) {
        return Promise.resolve(accessToken);
    } else {
        window.location.href = authUrl;
        return Promise.reject();
    }
};

export const fetchUserData = async (accessToken) => {
    let response = await axios.get('https://login.yandex.ru/info', {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    console.log(response.data)

    return response.data;

};
