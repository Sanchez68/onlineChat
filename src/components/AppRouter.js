import React, {useContext} from 'react';
import {Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {CHAT_ROUTE, CHAT_ROUTE_PATH, LOGIN_ROUTE, LOGIN_ROUTE_PATH} from "./utils/const";
import Redirect from "react-router-dom/Redirect";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";
import Chat from "./Chat";
import Login from "./Login";


const AppRouter = () => {
    const {auth} = useContext(Context)
    const [isLogin] = useAuthState(auth)
    return isLogin ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route path={path} component={Component} />
                )}
                <Chat/>
                {/*<Redirect to={CHAT_ROUTE}/>*/}
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route path={path} component={Component} />
                )}
                <Login/>
                {/*<Redirect to={LOGIN_ROUTE}/>*/}
            </Switch>
        )
};

export default AppRouter;