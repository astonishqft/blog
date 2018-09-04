import React, { Component } from 'react';
import { Menu } from 'antd';
import './style.css';

// const { Item } = Menu;

const categories = ['首页', 'iOS', 'Python', 'ReactJs'];

class Menus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: categories[0],
        }
    }
    handleClick = (e) => {
        this.setState({
            current: e
        })
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode={"horizontal"}
                className={"menuContainer"}
            >
                {
                    categories.map((item,index)=>(
                        <Menu.Item key={item} >
                            {item}
                        </Menu.Item>
                    ))
                }
            </Menu>
        )
    }
};

export default Menus;