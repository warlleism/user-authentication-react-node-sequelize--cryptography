import React, { createContext, useState } from 'react';

export const Context = createContext()

export default function Provider({ children }) {

    const [auth, setAuth] = useState(false)

    return (
        <Context.Provider value={{ auth, setAuth }}>
            {children}
        </Context.Provider>
    )

}