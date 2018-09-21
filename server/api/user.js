import express from 'express';
import { MD5_SUFFIX, responseClient, md5 } from '../util'

const router = express.Router();

router.get('/userInfo', function(req, res) {
    responseClient(res, 200, 0, '', '我是用户信息')
});

module.exports = router;
