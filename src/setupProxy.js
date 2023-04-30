const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	console.log('createProxyMiddleware');

	app.use(
		['/heroes'],
		createProxyMiddleware({
			target: 'https://hahow-recruit.herokuapp.com',
			changeOrigin: true,
			onProxyReq: function (proxyReq, req, res) {
				const originalUrl = req.originalUrl; // 获取原始URL
				const host = proxyReq.getHeader('host'); // 获取请求的host

				const fullUrl = `http://${host}${originalUrl}`; // 构建完整的URL

				console.log('Full URL:', fullUrl);
			},
			onProxyRes: function (proxyRes, req, res) {
				console.log('Proxy res: ', res);

				console.log('Proxy request successful!');
				console.log('Proxy response status code:', proxyRes.statusCode);
				console.log('Proxy response headers:', proxyRes.headers);
			},
			onError: function (err, req, res) {
				console.log('Proxy error:', err);
				res.writeHead(500, {
					'Content-Type': 'text/plain',
				});
				res.end('Something went wrong. Check the console for more information.');
			},
		}),
	);
};




