import React, { Component } from 'react';
import { Route, Switch } from 'react-route-dom';
import Home from '../Home';

class Front extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { url } = this.props.match;
        return (
            <div>
                <div>
                    <Switch>
                        <Route exact path={url} component={Home} />
                        <Route path={`/detail/:id`} component={Detail} />
                    </Switch>
                </div>
            </div>
        )
    }
}
