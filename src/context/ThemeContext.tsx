import { ReactNode, createContext, useState } from "react";

const ThemeContext = createContext({
    theme: "light", //초기값
    toggleMode: () => {}, //초기화
})

interface ThemeProps {
    children: ReactNode
}

export const ThemeContextProvider = ({children}: ThemeProps) => {
    const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light');

    const toggleMode = () => {
        setTheme((prev) => prev === 'light' ? "dark" : "light")
        window.localStorage.setItem('theme', theme === "light" ? "dark" : "light" )
    }

    return <ThemeContext.Provider value={{theme, toggleMode}}>
        {children}
    </ThemeContext.Provider>
};

export default ThemeContext;