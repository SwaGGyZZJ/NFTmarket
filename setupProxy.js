const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ipfs',
    createProxyMiddleware({
      target: 'https://copper-common-porcupine-687.mypinata.cloud',
      changeOrigin: true,
      pathRewrite: {
        '^/ipfs': '',
      },
      onProxyRes: function(proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      },

    })
  );
};