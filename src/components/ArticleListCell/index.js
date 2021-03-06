import React, { Component } from 'react';
import style from './style.css';
import { Link } from 'react-router-dom';

export default class ArticleListCell extends Component {
    render() {
        return (
            <div className={style.container} onClick={
                ()=> {
                    this.props.history.push(`/detail/${this.props.data._id}`, {id: this.props.data._id});
                }
            }>
                <div className={style.content}>
                    <div className={style.title}>
                        <h2>{this.props.data.title} + {this.props.tags}</h2>
                    </div>
                    <p className={style.summary}>
                        这里应该有摘要的，因为设计的数据库表表结构的时候忘记了，后面也是懒得加了，感觉太麻烦了，就算了
                    </p>
                    <div>
                        <div className={style.info}>
                            <div className={style.tag}>
                                <img src={require('./calendar.png')} alt="发表日期"/>
                                <div>{this.props.data.time}</div>
                            </div>
                            <div className={style.tag}>
                                <img src={require('./views.png')} alt="阅读数"/>
                                <div>{this.props.data.viewCount}</div>
                            </div>
                            <div className={style.tag}>
                                <img src={require('./calendar.png')} alt="发表日期"/>
                                <div>{this.props.data.commentCount}</div>
                            </div>
                        </div>
                        <span className={style.lastSpan}>
                            阅读全文
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}