import React from 'react';
import { connect } from 'react-redux';
import Footer from '../AppFrame/Footer/AdminFooter';
import NavBar from '../AppFrame/NavBar/AdminNavBar';
import SlideBar from '../AppFrame/SlideBar/AdminSlideBar';
import ListUser from './UserManager/ListUser';
import { Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import ListOrder from './Dashboard/ListOrder';
import EditInfo from '../User/EditInfo';
import Posts from './Blogs/Posts';
import Categorys from './Blogs/Categorys';
import Editor from './Blogs/Editor';
import DashboardDv from './Service/DashboardDv';
import GroupDetail from './Service/GroupDetail';
import BuildPackage from './Service/Pakage/BuildPackage';

const HomeAdmin = ({ match, StateInfoUser }) => {
    if (StateInfoUser.id_chucvu != null) {
        if (StateInfoUser.id_chucvu <= 2) {
            return (
                <div className="container-scroller">
                    <NavBar></NavBar>
                    <div className="container-fluid page-body-wrapper">
                        <SlideBar></SlideBar>
                        <div className="main-panel">
                            <div className="content-wrapper">
                                <Route exact path={match.url} component={Dashboard} />
                                <Route exact path={match.url + '/order'} component={ListOrder} />
                                {/* // */}

                                <Route exact path={match.url + '/users'} component={ListUser} />
                                <Route exact path={match.url + '/user/edit/:id'} component={EditInfo} />

                                {/* // */}
                                <Route path={match.url + '/post/list'} component={Posts} />
                                <Route path={match.url + '/post/editor/:slug/:id'} component={Editor} />
                                <Route path={match.url + '/category'} component={Categorys} />
                                <Route path={match.url + '/service/dashboard'} component={DashboardDv} />
                                <Route path={match.url + '/service/group/:id'} component={GroupDetail} />
                                <Route path={match.url + '/service/build-package'} component={BuildPackage} />
                            </div>
                            <Footer></Footer>
                        </div>
                    </div>
                </div>
            );
        } else {
            window.location = "/";
        }
    } else {
        return (<div>Verify user, waiting a moment...</div>)
    }
}

export default connect(function (state) {
    return { StateApp: state.StateApp, StateInfoUser: state.StateInfoUser }
})(HomeAdmin);