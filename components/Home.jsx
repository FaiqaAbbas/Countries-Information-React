import React from 'react'
import SearchBar from './SearchBar'
import CountriesList from './CountriesList'
import { useState } from 'react'

const Home=()=>{
const [searchQuery, setsearchQuery] = useState("")
    return (
      <>
        <main>
          <div className="search-filter-container">
            <SearchBar  setsearchQuery={setsearchQuery}/>
          </div>
          <CountriesList searchQuery={searchQuery}/>
        </main>
      </>
    )

}
export default Home

