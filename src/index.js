import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Front from './containers/Front';
import Admin from './containers/Admin';
import { BrowserRouter as Router, Switch, Route, history } from 'react-router-dom';
import NotFound from "./containers/NotFound";


ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route path={'/404'} component={NotFound} />
                <Route path={'/admin'} component={Admin} />
                <Route component={Front} />
            </Switch>
        </div>
    </Router>
    , document.getElementById('root')
);
