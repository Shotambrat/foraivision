import store from './store';
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
                'Authorization': `OAuth ${store.getState().token}`,
            },
        })
    );
};