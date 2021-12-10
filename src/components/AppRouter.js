import React, {useContext} from 'react';
import {Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "./utils/const";
import Redirect from "react-router-dom/Redirect";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";


const AppRouter = () => {
    const {auth} = useContext(Context)
    const [isLogin] = useAuthState(auth)
    return isLogin ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route path={path} component={Component} />
                )}
                <Redirect to='/onlineChat/login'/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route path={path} component={Component} />
                )}
                <Redirect to='/onlineChat/chat'/>
            </Switch>
        )
};

export default AppRouter;