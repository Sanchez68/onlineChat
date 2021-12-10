import React, {useContext} from 'react';
import Button from "@mui/material/Button";
import s from './components.module.css'
import {Context} from "../index";
import firebase from "firebase/compat";
const Login = () => {

    const {auth} = useContext(Context)

    const loginOnClick = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }
    return (
        <div className={s.loginWrapper}>
            <Button variant="outlined" onClick={loginOnClick}>
                Enter with Google
            </Button>
        </div>
    );
};

export default Login;