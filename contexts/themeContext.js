import { createContext, useContext, useState } from "react";
export var themeContext=createContext('')

export function ThemeProvider({children}) {
    const [isDark, setisDark] = useState(JSON.parse(localStorage.getItem('isDark')))
  return (
    <themeContext.Provider value={[isDark,setisDark]}>{children}</themeContext.Provider>
  )
}
