import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import s from './components.module.css'
import {Avatar, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./common/Loader";
import firebase from "firebase/compat";

const Chat = () => {

    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [inputValue, setValue] = useState("")

    const [messages, loading] =
        useCollectionData(firestore.collection('messages').orderBy('createdAt'))


    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: inputValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <div className={s.chatWrapper}>
            <div className={s.chatWindow}>
                {messages.map(message =>
                    <div key={message.uid} className={s.messageWrapper}>
                        <div>
                            <Avatar src={message.photoURL}/>
                            <div>{message.displayName}</div>
                        </div>
                        <div>
                            {message.text}
                        </div>
                    </div>
                )}
            </div>
            <TextField fullWidth
                       maxRows={2}
                       id="filled-basic"
                       label="Filled" variant="filled"
                       value={inputValue}
                       onChange={e => setValue(e.target.value)}
            />
            <Button onClick={sendMessage} variant="outlined">Отправить</Button>
        </div>
    );
};

export default Chat;