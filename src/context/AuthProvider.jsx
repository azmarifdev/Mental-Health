import React, {createContext, useContext, useEffect, useState} from "react";
import {getUserInfoFromToken} from "../utils/getUserInfoFromToken";
import {config} from "../utils/envCongif";
import Loading from "../utils/Loading";

export const UserContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState("");

    useEffect(() => {
        setLoading(true);
        setToken(localStorage.getItem("accessToken") || "");
        if (token) {
            const decodedInfo = getUserInfoFromToken(token);
            fetch(`${config.base_url}/user/${decodedInfo.id}`, {
                headers: {
                    Authorization: `${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data?.message == "jwt expired") {
                        localStorage.removeItem("accessToken");
                        setToken("");
                        setUser(null);
                    } else {
                        setUser(data.data);
                        setLoading(false);
                    }
                });
        } else {
            setUser(null);
            setLoading(false);
        }
    }, [token]);

    if (loading) {
        return <Loading />;
    }

    const authInfo = {user, setUser, loading, setLoading, token, setToken};
    return (
        <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
