import React from "react";
import {Navigate, useLocation} from "react-router-dom";

import Loading from "../utils/Loading";
import {useUserContext} from "../context/AuthProvider";

const PrivetRouter = ({children}) => {
    const {user, loading} = useUserContext();

    const location = useLocation();

    if (loading) {
        return <Loading />;
    }
    if (!user) {
        return (
            <Navigate to={"/login"} state={{from: location}} replace></Navigate>
        );
    }
    return children;
};

export default PrivetRouter;
