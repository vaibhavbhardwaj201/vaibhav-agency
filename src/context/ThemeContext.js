"use client"

import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState("dark")

    const toggleTheme = () => {
        setMode(prev => (prev === "dark" ? "light" : "dark"))
    }

    return (
        <ThemeContext.Provider value={{mode, toggleTheme}}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}