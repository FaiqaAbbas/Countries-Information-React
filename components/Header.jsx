import { useContext, useState } from "react"
import { themeContext } from "../contexts/themeContext"
export default function Header() {
  const [isDark,setisDark]=useContext(themeContext)
    return (
    <header className= {`header-container ${isDark?'dark':'light'}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
          localStorage.setItem('isDark',!isDark)
          isDark?setisDark(false):setisDark(true)
    
        }}>
          <i className={`fa-regular fa-${isDark?'sun':'moon'}`} />
          &nbsp;&nbsp;{`${isDark?'Light':'Dark'}`}
        </p>
      </div>
    </header>
  )
}
