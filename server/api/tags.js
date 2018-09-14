import express from 'express';
import Tag from '../../models/tag';
import { responseClient } from '../util';

const router = express.Router();


// 添加标签
router.post('/addTag', function(req, res) {
    let { name } = req.body;
    console.log('新增标签:', name);
    Tag.findOne({name}).then(result => {
        if(!result) {
            let tag = new Tag({
                name
            });
            tag.save().then(data => {
                responseClient(res, 200, 0, '标签添加成功', data);
            }).catch(err => {
                throw err;
            })
        }else {
            responseClient(res, 200, 1, '该标签已存在');
        }
    }).catch(err => {
        responseClient(res);
    })
});

module.exports = router;