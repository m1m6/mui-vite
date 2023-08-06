import React, { useState } from "react";
import { Cookies } from "../shared/utility";

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
    user: null,
});

export const AuthContextProvider = (props) => {
    const initialUser = JSON.parse(localStorage.getItem("user")) || null;
    const intialToken = Cookies.getCookie("token");

    const [token, setToken] = useState(intialToken);
    const [user, setUser] = useState(initialUser);

    const userIsLoggedIn = !!token;

    const loginHandler = (token, userData) => {
        setToken(token);
        setUser(userData)
        Cookies.setCookie("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logoutHandler = () => {
        setToken(null);
        setUser(null)
        Cookies.deleteCookie("token");
        localStorage.removeItem("user");
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        user: user,
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
