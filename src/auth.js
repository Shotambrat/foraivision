import axios from 'axios';

const clId= "0683088a08764acf8aaf1ccdb852c6d3";
const redirectUrl = "http://localhost:3000/auth";
const authUrl = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${clId}&redirect_uri=${redirectUrl}`;

export const getToken = () => {
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
    let response = await axios.get("https://login.yandex.ru/info", {
        headers: {
            'Authorization': `OAuth ${accessToken}`,
        },
    });

    console.log(response.data);
    console.log(response.request)
};
