import React, { useContext } from "react";

import { Navigate } from "react-router-dom"

import { Context } from "../context/provider";


export function PrivateRoute({ children }) {

    const { auth, setAuth } = useContext(Context);

    const user = auth

    return user ? children : <Navigate to="/" />
}