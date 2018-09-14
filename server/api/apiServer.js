/**
 * api请求server
 *
 * 0：成功
 * 1：数据不合法
 * 2：客户端数据错误
 * 3：后端错误
 */

import express from 'express';
import config from '../../config/config';
import bodyParse from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const { apiPort } = config;

const app = new express();
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParse.urlencoded({extended: false}));
app.use(cookieParser('express_react_cookie'));
app.use(session({
    secret: 'express_react_cookie',
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 60 * 1000 * 30}
}));

// 管理页面路由
app.use('/admin', require('./admin'));

mongoose.Promise = require('bluebird');
mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/blog`, function(err) {
   if (err) {
       console.log("数据库连接失败", err)
       return;
   }
   console.log(`====> db server is running at ${config.dbHost}:${config.dbPort}`);

   app.listen(apiPort, err => {
       if(err) {
           console.log('服务启动失败', err);
       } else {
           console.log(`====> api server is running at ${config.apiHost}:${config.apiPort}`);
       }
   })
});