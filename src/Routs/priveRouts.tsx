import { useState } from "react";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";


type ChildrenProps = {
    children: ReactNode;
}

export function Prive({ children }: ChildrenProps) {
    const [user, setUser] = useState(true)

    if (!user) {
        return <Navigate to="/" />

    }

    return children;
}