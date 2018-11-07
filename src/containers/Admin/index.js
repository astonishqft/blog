import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import style from './style.css';
import AdminMenu from '../../components/AdminMenu';
// import AdminIndex from '../AdminIndex';
// import AdminManagerUser from '../AdminManagerUser';
// import AdminManagerTags from '../AdminManagerTags';
// import AdminManagerArticle from '../AdminManagerArticle';
// import AdminManagerComment from '../AdminManagerComment';
// import AdminNewArticle from '../AdminNewArticle';
// import Detail from '../Detail';
import NotFound from '../NotFound';
import asyncComponent from "../asyncComponent";
import AdminHeader from '../../components/adminHeader';

const AdminIndex = asyncComponent(()=>import(/* webpackChunkName: "adminIndex" */"../AdminIndex"));
const AdminManagerUser = asyncComponent(()=>import(/* webpackChunkName: "adminManagerUser" */"../AdminManagerUser"));
const AdminManagerTags = asyncComponent(()=>import(/* webpackChunkName: "adminManagerTags" */"../AdminManagerTags"));
const AdminManagerArticle = asyncComponent(()=>import(/* webpackChunkName: "adminManagerArticle" */"../AdminManagerArticle"));
const AdminManagerComment = asyncComponent(()=>import(/* webpackChunkName: "adminManagerComment" */"../AdminManagerComment"));
const AdminNewArticle = asyncComponent(()=>import(/* webpackChunkName: "adminNewArticle" */"../AdminNewArticle"));
const Detail = asyncComponent(()=>import(/* webpackChunkName: "detail" */"../Detail"));


class Admin extends Component {
    render() {
        const { url } = this.props.match;
        console.log('当前url', url);
        return (
            <div>
                {
                    <div className={style.container}>
                        <div className={ style.menuContainer }>
                            <AdminMenu history={this.props.history} />
                        </div>
                        <div className={style.adminHeader}>
                            <AdminHeader />
                        </div>
                        <div className={style.contentContainer}>
                            <Switch>
                                <Route exact path={url} component={AdminIndex}/>
                                <Route path={`/managerUser`} component={AdminManagerUser}/>
                                <Route path={`/managerTags`} component={AdminManagerTags}/>
                                <Route path={`/newArticle`} component={AdminNewArticle}/>
                                <Route path={`/managerArticle`} component={AdminManagerArticle}/>
                                <Route path={`/managerComment`} component={AdminManagerComment}/>
                                <Route path={`/detail`} component={Detail}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                        <div style={{ 'clear': 'both'}}></div>
                    </div>
                }
            </div>
        )
    }
}

export default Admin;
