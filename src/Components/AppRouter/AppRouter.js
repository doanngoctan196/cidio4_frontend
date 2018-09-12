import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Login from '../User/Login';
import Register from '../User/Register';
import ErrorPage from '../App/ErrorPage';
import HomeAdmin from '../HomeAdmin/HomeAdmin.jsx';
import UserHome from '../UserHome/UserHome';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={UserHome} />
                    <Route path="/admin" component={HomeAdmin} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route component={ErrorPage} />
                </Switch>
            </div>
        );
    }
}

export default RouterURL;