import express from 'express';
import Article from '../../models/article';
import {responseClient} from '../util';
import get from 'lodash.get';

const router = express.Router();

router.post('/addArticle', function (req, res) {
    const { title, subTitle, desc, time, tags=[], isPublish } = req.body;
    const author = get(req,'session.userInfo.username', '');
    const coverImg = '';
    const viewCount = 0;
    const commentCount = 0;
    let tempArr = new Article({
        title,
        subTitle,
        desc,
        isPublish,
        viewCount,
        commentCount,
        time,
        author,
        coverImg,
        tags: tags.split(',')
    });
    tempArr.save().then(data => {
        responseClient(res, 200, 0, '保存成功!', data);
    }).cancel(err => {
        console.log(err);
        responseClient(res);
    });
});

router.post('/updateArticle', (req, res) => {
    const { title, subTitle, content, desc, time, tags, isPublish, id} = req.body;
    Article.update({
        _id: id
    },{
        title,
        subTitle,
        content,
        desc,
        time,
        tags: tags.split(','),
        isPublish
    }).then(data => {
        console.log(data);
        responseClient(res, 200, 0, '更新成功!', data);
    }).cancel(err => {
        console.log(err);
        responseClient(res);
    });
});

router.get('/delArticle', (req, res) => {
    const { id } = req.query;
    Article.remove({_id: id}).then(data=> {
        if(data.result.n === 1) {
            responseClient(res, 200, 0, '删除成功!');
        }else {
            responseClient(res, 200, 1, '文章不存在')
        }
    }).cancel(err => {
        responseClient(res);
    });
});

module.exports = router;