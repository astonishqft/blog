import React, { Component } from 'react';
import style from './style.css';
const logo = require('./logo.svg')

class Header extends Component {
    render() {
        return (
            <div className={style.header}>
                <span className={style.log} onClick={this.props.handleLogin}>
                    <img src={logo} alt=""/>
                </span>
                <h1>Qi futao's blog</h1>
                <p>If you can, you can !</p>
            </div>
        )
    }
}

export default Header;