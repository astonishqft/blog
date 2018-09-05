import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Front from './containers/Front';
import { BrowserRouter as Router, Switch, Route, history } from 'react-router-dom';

import Home from './containers/Home/Home';

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route component={Front} />
            </Switch>
        </div>
    </Router>
    ,
    document.getElementById('root')
);
