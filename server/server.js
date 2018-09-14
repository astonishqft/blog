import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import httpProxy from 'http-proxy';
import compression from 'compression';
// import history from 'connect-history-api-fallback';
import config from '../config/config';

const app = new express();

const port = config.port;
const targetUrl = `http://${config.apiHost}:${config.apiPort}`;

const proxy = httpProxy.createProxyServer({
    target: targetUrl
});

app.use('/api', (req, res) => {
    proxy.web(req, res, { target: targetUrl});
})

app.use(compression());
app.use('/', express.static(path.join(__dirname, '..', 'build')));

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));

app.listen(port, err => {
    if(err) {
        console.log(err);
    }else {
        console.log(`===>open http://${config.host}:${config.port} in a browser to view the app`)
    }
})