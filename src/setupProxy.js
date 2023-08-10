import store from './store';
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://cloud-api.yandex.net/v1/disk',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
            headers: {
                'Authorization': `Bearer ${store.getState().token}`,
            },
        })
    );
};