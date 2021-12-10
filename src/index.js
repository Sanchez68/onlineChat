import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import firebase from "firebase/compat";
import "firebase/auth";
import "firebase/firestore";


firebase.initializeApp({
        apiKey: "AIzaSyB1S8zZhOP8dBNM2Hph0RAVBpq040ooMm0",
        authDomain: "chat-react-cedb2.firebaseapp.com",
        projectId: "chat-react-cedb2",
        storageBucket: "chat-react-cedb2.appspot.com",
        messagingSenderId: "966615400212",
        appId: "1:966615400212:web:565efb0db115ce87f2cc01",
        measurementId: "${config.measurementId}"
    }
)
const auth = firebase.auth()
const firestore = firebase.firestore()

export const Context = createContext(null)
ReactDOM.render(
    <BrowserRouter>
        <Context.Provider value={{
            firebase,
            auth,
            firestore
        }}>
            <App/>
        </Context.Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

