import {CHAT_ROUTE, LOGIN_ROUTE} from "./components/utils/const";
import Login from "./components/Login";
import Chat from "./components/Chat";

export const publicRoutes =[
    {
        path: "/login",
        Component: Login
    }
]
export const privateRoutes =[
    {
        path: "/chat",
        Component: Chat
    }
]