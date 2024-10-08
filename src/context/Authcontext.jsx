import React from "react";

export const MyContext=React.createContext();

export const AuthProvider=({children})=>{
    const user=true
    return (
        <MyContext.Provider value={user}>
        </MyContext.Provider>
    )
}