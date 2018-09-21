import React from 'react';
import style from './style.css';
import { Spin } from 'antd';

export const Loading = (props) => (
    <div className={style.container}>
        <Spin size="large" />
    </div>
);