const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		['/heroes'],
		createProxyMiddleware({
			target: 'https://hahow-recruit.herokuapp.com',
			changeOrigin: true,
		}),
	);
};
