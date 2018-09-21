import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Front from './containers/Front';
import Admin from './containers/Admin';
import { BrowserRouter as Router, Switch, Route, history } from 'react-router-dom';
import NotFound from "./containers/NotFound";
import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';
import configStore from './configureStore';

import AppIndex from './containers';

const store = configStore();

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <AppIndex/>
        </Provider>
    </AppContainer>
    , document.getElementById('root')
);

if(module.hot && process.env.NODE_ENV !== 'production'){
    module.hot.accept();
}