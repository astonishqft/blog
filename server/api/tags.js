import express from 'express';
import Tag from '../../models/tags';
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

// 删除标签
router.get('/delTag', (req, res) => {
    const { name } = req.query;
    Tag.remove({name}).then(result=> {
        console.error('删除成功结果:', result);
        responseClient(res, 200, 0, '删除成功!')
    })
});

module.exports = router;