import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import httpProxy from 'http-proxy';
import compression from 'compression';
import history from 'connect-history-api-fallback';
import config from '../config/config';

const app = new express();

const port = config.port;
const targetUrl = `http://${config.apiHost}:${config.apiPort}`;

const proxy = httpProxy.createProxyServer({
    target: targetUrl
});

app.use('/', history());

app.use('/api', (req, res) => {
    proxy.web(req, res, { target: targetUrl});
})

app.use(compression());
app.use('/', express.static(path.join(__dirname, '..', 'build')));

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));

//热更新
if(process.env.NODE_ENV !== 'production') {
    const Webpack = require('webpack');
    const WebpackDevMiddleware = require('webpack-dev-middleware');
    const WebpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('../webpack.dev');

    const compiler = Webpack(webpackConfig);

    app.use(WebpackDevMiddleware(compiler, {
        // publicPath: '/',
        publicPath: `${webpackConfig.output.publicPath}`, // 绑定中间件的公共路径,与webpack配置的路径相同
        stats: {colors: true},
        lazy: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },
    }));

    app.use(WebpackHotMiddleware(compiler));
}

app.listen(port, err => {
    if(err) {
        console.log(err);
    }else {
        console.log(`===>open http://${config.host}:${config.port} in a browser to view the app`)
    }
})