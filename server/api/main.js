import express from 'express';
import Tags from '../../models/tags';

import { responseClient } from '../util';


const router = express.Router();

router.use('/user', require('./user'));

// 获取全部标签
router.use('/getAllTags', (req, res) => {
   Tags.find(null, 'name').then(data => {
        responseClient(res, 200, 0, '请求成功', data);
   }).catch(err =>{
       responseClient(res);
   });
});

module.exports = router;