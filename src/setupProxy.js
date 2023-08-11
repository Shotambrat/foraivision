// import {store} from './store';
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://login.yandex.ru/info',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
            headers: {
                'Authorization': 'Bearer y0_AgAAAABpirqGAApNHAAAAADpp4jEU3pFf3lWRSubGhaP8rq7UcHEb2c'
            }
        })
    );
};

// `OAuth ${store.getState().token.token}`