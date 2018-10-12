import React,  { Component, PropTypes } from 'react';
import remark from 'remark';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import reactRenderer from 'remark-react';
import { Input, Select, Button, Modal } from 'antd';
import '../Detail/style.css';
import style from './style.css';
import dateFormat from 'dateformat';

import {actions} from '../../reducers/adminManagerNewArticle';
import {actions as tagsActions } from '../../reducers/adminManagerTags';

const { get_all_tags } = tagsActions;

const {update_title, update_content, update_tags, update_desc, update_sub_title, save_article } = actions;


class AdminNewArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            content:'',
            tags:[],
            modalVisible: false
        };
        this.onContentChange = this.onContentChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSubTitleChange = this.onSubTitleChange.bind(this);
        this.onSelectTags = this.onSelectTags.bind(this);
        this.preView = this.preView.bind(this);
        this.publishArticle = this.publishArticle.bind(this);
    }

    // 正文内容
    onContentChange(e) {
        // this.setState({ content: e.target.value });
        this.props.update_content(e.target.value);
    }

    // 标题输入框
    onTitleChange(e) {
        // this.setState({ title: e.target.value });
        this.props.update_title(e.target.value);
    };

    // 副标题输入框
    onSubTitleChange(e) {
        // this.setState({ title: e.target.value });
        this.props.update_sub_title(e.target.value);
    };

    //选择标签
    onSelectTags(value) {
        this.setState({ tags: value })
        console.log('新建的文章的标签：', value)
    };

    //预览
    preView() {
        this.setState({
            modalVisible: true
        })
    };

    //发表
    publishArticle() {
        let newData = {};
        newData.title = this.props.title;
        newData.subTitle = this.props.subTitle;
        newData.content = this.props.content;
        newData.desc = this.props.desc;
        newData.time = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss')
        newData.isPublish = true;
        newData.tags = this.props.tags;
        this.props.save_article(newData);
    };

    //保存
    saveArticle() {
        let newData = {};
        newData.title = this.props.title;
        newData.subTitle = this.props.subTitle;
        newData.content = this.props.content;
        newData.desc = this.props.desc;
        newData.time = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss')
        newData.isPublish = false;
        newData.tags = this.props.tags;
        this.props.save_article(newData);
    };

    //handleOk
    handleOk() {
        this.setState({
            modalVisible: false
        })
    };

    render() {
        const { title, content, subTitle, desc, tagsBase = [], tags = [] } = this.props;
        return  (
            <div className={style.adminNewArticle}>
                <h2>新建文章</h2>
                <div className={style.container}>
                    <span className={style.subTitle}>标题</span>
                    <Input
                        className={style.titleInput}
                        placeholder={'请输入文章标题'}
                        type='text'
                        value={title}
                        onChange={this.onTitleChange}
                    />
                    <span className={style.subTitle}>副标题</span>
                    <Input
                        className={style.titleInput}
                        placeholder={'请输入文章副标题'}
                        type='text'
                        value={subTitle}
                        onChange={this.onSubTitleChange}
                    />
                    <span className={style.subTitle}>正文</span>
                    <textarea
                        className={style.textArea}
                        value={content}
                        onChange={this.onContentChange}
                    />
                    <span className={style.subTitle}>分类</span>
                    <Select
                        mode='multiple'
                        className={style.titleInput}
                        placeholder='请选择分类'
                        onChange={this.onSelectTags}
                        value={this.props.tags}
                    >
                        {
                            tagsBase.map( (item) => (
                                <Select.Option key={item}>{item}</Select.Option>
                            ))
                        }
                    </Select>
                    <div className={style.bottomContainer}>
                        <Button type="primary" onClick={this.publishArticle} className={style.buttonStyle}>发布</Button>
                        <Button type="primary" onClick={this.saveArticle} className={style.buttonStyle}>保存</Button>
                        <Button type="primary" onClick={this.preView} className={style.buttonStyle}>预览</Button>
                    </div>
                </div>

                <Modal
                    visible={this.state.modalVisible}
                    title="文章预览"
                    onOk={this.handleOk.bind(this)}
                    width={'900px'}
                    onCancel={this.handleOk.bind(this)}
                    footer={null}
                >
                    <div className={style.modalContainer}>
                        <div id='preview' className={style.markdown_body}>
                            {remark().use(reactRenderer).processSync(content).contents}
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

    componentDidMount() {
        this.props.get_all_tags();
    }
}

AdminNewArticle.propsTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    connect: PropTypes.string,
    tags: PropTypes.array,
    tagsBase: PropTypes.array
};

const mapStateToProps = state => {
    const {title, subTitle, content, desc, tags } = state.admin.newArticle;

    let tempArr = state.admin.tags.tags;
    for(let i=0; i< tempArr.maxLength; i++) {
        if(tempArr[i] === '首页') {
            tempArr.splice(i, 1);
        }
    }

    return {
        title,
        content,
        subTitle,
        desc,
        tags: state.admin.tags.tags,
        tagsBase: tempArr
    }
};

const mapDispatchToProps = dispatch => {
    return {
        update_title: bindActionCreators(update_title, dispatch),
        update_content: bindActionCreators(update_content, dispatch),
        update_sub_title: bindActionCreators(update_sub_title, dispatch),
        update_desc: bindActionCreators(update_desc, dispatch),
        get_all_tags: bindActionCreators(get_all_tags, dispatch),
        save_article: bindActionCreators(save_article, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdminNewArticle);

