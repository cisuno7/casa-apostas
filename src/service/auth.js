import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { constants } from "buffer";
import { keepalives } from "pg/lib/defaults";

export const TOKEN_KEY = "auth-token";
export const TOKEN_EXPIRATION = "validity-token"

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getokenExpiration=(token)=>localStorage.getItem(TOKEN_EXPIRATION)

export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
    const today = new Date();
    const today1=new Date();
    const expiration = today.setDate(today.getDate() + 2).toString()
    localStorage.setItem(TOKEN_EXPIRATION, expiration)
    isAuthenticated(keepalives)
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = "/";
}
