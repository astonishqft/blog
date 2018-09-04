import React, { Component } from 'react';
import './style.css';
const logo = require('./logo.svg')

class Header extends Component {
    render() {
        return (
            <div className={"header"}>
                <span className={"log"}>
                    <img src={logo} alt=""/>
                    <h1>Qi futao's blog</h1>
                    <p>If you can, you can !</p>
                </span>
            </div>
        )
    }
};

export default Header;