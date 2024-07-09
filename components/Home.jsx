import {React,useContext,useState} from 'react'
import SearchBar from './SearchBar'
import CountriesList from './CountriesList'
import { themeContext } from '../contexts/themeContext'


const Home=()=>{
 const [isDark]=useContext(themeContext)
 const [searchQuery, setsearchQuery] = useState("")
    return (
      <>
        <main className={`${isDark?'dark':'false'}`}>
          <div className="search-filter-container">
            <SearchBar  setsearchQuery={setsearchQuery}/>
          </div>
          <CountriesList searchQuery={searchQuery}/>
        </main>
      </>
    )

}
export default Home

