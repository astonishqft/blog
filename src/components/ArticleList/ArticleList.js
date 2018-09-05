import React, { Component } from 'react';
import ArticleListCell from '../ArticleListCell';

const items = [{
    key: '123',
    title: '标题',
    time: '2017-10-29',
    viewCount: '100',
    commentCount: '23'
},{
    key: '123332',
    title: '标题2',
    time: '2017-10-29 12:00:00',
    viewCount: '10',
    commentCount: '123'
}];


class ArticleList extends Component {
    render() {
        return (
            <h1> Hello qifutao</h1>
        )
    }
};

export default ArticleList;