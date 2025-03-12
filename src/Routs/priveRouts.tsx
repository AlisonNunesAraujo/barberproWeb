import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../ContextApi";

import { ReactNode } from "react";


type children = {
    children: ReactNode
}

export function Prive({ children }: children) {
    const { logado } = useContext(AuthContext)

    if (!logado) {
        return <Navigate to="/" />

    }

    return children;
}