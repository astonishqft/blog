import React, { Component } from 'react';
import style from './style.css';
const logo = require('./logo.svg')

class Header extends Component {
    render() {
        return (
            <div className={style.header}>
                <span className={style.log}>
                    <img src={logo} alt=""/>
                    <h1>Qi futao's blog</h1>
                    <p>If you can, you can !</p>
                </span>
            </div>
        )
    }
};

export default Header;