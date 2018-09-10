import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';
import AdminMenu from '../../components/AdminMenu';
import AdminIndex from '../../containers/AdminIndex';
import AdminManagerUser from '../../containers/AdminManagerUser';
import AdminManagerTags from '../../containers/AdminManagerTags';
import AdminManagerArticle from '../../containers/AdminManagerArticle';
import AdminManagerComment from '../../containers/AdminManagerComment';
import AdminNewArticle from '../../containers/AdminNewArticle';
import Detail from '../Detail';
import NotFound from '../NotFound';

class Admin extends Component {
    render() {
        const { url } = this.props;
        return (
            <div>
                <div className={"admin_container"}>
                    <div className={"menuContainer"}>
                        <AdminMenu history={this.props.history} />
                    </div>
                    <div className={"contentContainer"}>
                        <Switch>
                            <Route exact path={url} component={AdminIndex} />
                            <Route path={`${url}/managerUser`} component={AdminManagerUser} />
                            <Route path={`${url}/managerTags`} component={AdminManagerTags} />
                            <Route path={`${url}/newArticle`} component={AdminNewArticle} />
                            <Route path={`${url}/managerArticle`} component={AdminManagerArticle} />
                            <Route path={`${url}/managerComment`} component={AdminManagerComment} />
                            <Route path={`${url}/detail`} component={Detail} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    };
}

export default Admin;