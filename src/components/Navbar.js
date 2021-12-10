import React, {useContext} from 'react';
import {AppBar, Grid, Toolbar,} from "@mui/material";
import Button from '@mui/material/Button';
import {LOGIN_ROUTE} from "./utils/const";
import NavLink from "react-router-dom/NavLink";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [isLogin] = useAuthState(auth)
    return (
        <AppBar position="static">
            <Toolbar variant={"dense"}>
                <Grid container justify={'flex-end'}>
                </Grid>
                { isLogin ?  <Button onClick={()=>{auth.signOut()}} variant="contained">Logout</Button>
                    :
                    <NavLink to={LOGIN_ROUTE}>
                        <Button variant="contained">Login</Button>
                    </NavLink>
                }
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;