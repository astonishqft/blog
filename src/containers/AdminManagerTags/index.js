import React,  { Component } from 'react';
import style from './style.css';
import {Tag, Input, Tooltip, Button} from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actions} from '../../reducers/adminManagerTags';

import _ from 'lodash';

const { get_all_tags, add_tag, delete_tag } = actions;

class AdminManagerTags extends Component {
    constructor(props){
        super(props);
        this.state={
            tags: ['首页'],
            inputVisible: false,
            inputValue: '',
        }
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        // 添加标签
        if (this.state.inputValue.length > 0) {
            // this.state.tags.push(this.state.inputValue)
            // this.setState({
            //     tags: this.state.tags,
            // });
            const tagName = this.state.inputValue;
            this.props.addTag(tagName);
        }
        this.setState({
            inputVisible: false,
            inputValue: '',
        });
    };

    handleDelete = (removeTag) => {
        // _.remove(this.state.tags, tag => tag === removeTag);
        this.props.deleteTag(removeTag);
        this.setState({ tags: this.state.tags })
    }

    saveInputRef = input => this.input = input;
    render() {
        const { inputVisible, inputValue } = this.state;
        const { tags } = this.props;

        return  (
            <div>
                <h2>标签管理</h2>
                {tags && tags.map( (tag, index) => {
                    const isLongTag = tag.length > 20;
                    const tagElem = (
                        <Tag className={style.tagStyle} key={index} closable={index !== 0} afterClose={ () => this.handleDelete(tag) }>
                            {isLongTag ? `${tag.slice(0,20)}...` : tag}
                        </Tag>
                    );
                    return isLongTag ? <Tooltip key={tag} title={tag}>{tagElem}</Tooltip> : tagElem;
                })}
                {inputVisible && (
                    <Input
                        className={style.tagStyle}
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 108 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                )}
                { !inputVisible && (
                    <Button
                        className={style.tagStyle}
                        size="small"
                        type="dashed"
                        onClick={this.showInput}
                    >+ New Tag</Button>
                )}
            </div>
        )
    }

    componentDidMount() {
        this.props.getAllTags();
    }
}

// const mapStateToProps = state => {
//     const {tags} = state.admin;
//     return {
//         tags
//     }
// }
//
// const mapDispatchToProps = dispatch => {
//     return {
//         getAllTags: bindActionCreators(get_all_tags, dispatch),
//         deleteTag: bindActionCreators(delete_tag, dispatch),
//         addTag: bindActionCreators(add_tag, dispatch)
//     }
// }

function mapStateToProps(state) {
    return{
        tags:state.admin.tags
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getAllTags : bindActionCreators(get_all_tags,dispatch),
        deleteTag : bindActionCreators(delete_tag,dispatch),
        addTag : bindActionCreators(add_tag,dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminManagerTags);

