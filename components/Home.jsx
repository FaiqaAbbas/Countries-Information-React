import React from 'react'
import SearchBar from './SearchBar'
import CountriesList from './CountriesList'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'


const Home=()=>{
 const [isDark]=useOutletContext()
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

