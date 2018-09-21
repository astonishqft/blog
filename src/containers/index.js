import React, { Component, ProTypes } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Front from './Front';
import Admin from './Admin';
import NotFound from './NotFound';


import { notification } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../reducers/globalStateReducer';
import {Loading} from "../components/Loading";
const { clear_msg, user_auth } = actions;


class AppIndex extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { isFetching } = this.props;
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path='/404' component={NotFound} />
                        <Route path='/admin' component={Admin} />
                        <Route component={Front} />
                    </Switch>
                    { isFetching && <Loading/>}
                </div>
            </Router>
        )
    }

    componentDidMount() {
        this.props.user_auth();
    }
}

function mapStateToProps (state) {
    return {
        notification: state.globalState.msg,
        isFetching: state.globalState.isFetching,
        userInfo: state.globalState.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clear_msg: bindActionCreators(clear_msg, dispatch),
        user_auth: bindActionCreators(user_auth, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppIndex);