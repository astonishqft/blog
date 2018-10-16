import React, { Component } from 'react';
import style from './style.css';
import Header from '../../components/Header';
import Menus from '../../components/Menus';
import ArticleList from '../../components/ArticleList'
import { Redirect } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            showLogin: false
        });
    }


    render() {
        const { tags } = this.props;
        // console.log('history:', this.props.history);
        // console.log('history:', this.props.history.push);
        return (
            <div className={style.container}>
                <Header handleLogin={this.handleLogin} />
                <div className={style.nav}>
                    <Menus history={this.props.history} />
                </div>
                <div className={style.main}>
                    <ArticleList history={this.props.history} tags={tags} />
                </div>
            </div>
        )
    }

    handleLogin = () => {
        const current = !this.state.showLogin;
    }

}

export default Home;
