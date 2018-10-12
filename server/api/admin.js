import mongoose from 'mongoose';
import express from 'express';
import { responseClient } from '../util';

const router = express.Router();

// admin请求后台认证
// router.use((req, res, next) => {
//     if(req.session.userInfo) {
//         next();
//     }else {
//         console.log('认证失败!');
//         responseClient(res, 200, 1, '身份信息已过期，请重新登录');
//     }
// });

router.use('/tags', require('./tags'));
router.use('/article', require('./article'));

module.exports = router;