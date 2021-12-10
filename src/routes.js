import {CHAT_ROUTE, LOGIN_ROUTE} from "./components/utils/const";
import Login from "./components/Login";
import Chat from "./components/Chat";

export const publicRoutes =[
    {
        path: "onlineChat/login",
        Component: Login
    }
]
export const privateRoutes =[
    {
        path: "onlineChat/chat",
        Component: Chat
    }
]