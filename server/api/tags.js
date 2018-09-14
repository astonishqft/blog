import express from 'express';
import Tag from '../../models/tag';
import { responseClient } from '../util';

const router = express.Router();


// 添加标签
router.post('/addTag', function(req, res) {
    let { name } = req.body;
    console.log('我回来啦！！！', name)
});

module.exports = router;