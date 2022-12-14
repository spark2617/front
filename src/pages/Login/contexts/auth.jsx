import React, { useState,createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
const navigate = useNavigate();

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(()=> {
    const recoveredUser = localStorage.getItem('user');

    if(recoveredUser) {
        setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
},[]);

const login = (email, password) => {
    console.log("login auth", {email, password});

    const loggedUser ={
        id:"exemplo",
        email,

    };

    localStorage.setItem('user', JSON.stringify(loggedUser));


    if (password === "123456" && email === "user.dominio.com"){
        setUser({id:"exemplo", email});
        navigate("/");
    }
};
const logout = () => {
    console.log("user");
    localStorage.removeItem('user');
    setUser(null);
    navigate("/login");
};

    return ( 
            <AuthContext.Provider value = 
            {{ authenticated: !!user, user, loading, login, logout }} >
                {children}
        </AuthContext.Provider>
    );
};
