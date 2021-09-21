module.exports = {
    devServer: function (configFunction) {
        console.log("dev server overrides");
        return function (proxy, allowedHost) {           
            const config = configFunction(proxy, allowedHost);

            config.proxy = {
                '/v1': {
                    target: 'https://emailvalidation.abstractapi.com',
                    changeOrigin: true,
                }
            }

            return config;
        };
    },
}   