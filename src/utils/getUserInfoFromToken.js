import {jwtDecode} from "jwt-decode";

export const getUserInfoFromToken = (token) => {
    try {
        return jwtDecode(token);
    } catch (error) {
        return {};
    }
};
