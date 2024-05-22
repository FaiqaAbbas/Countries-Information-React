import React from 'react'
import {useState} from 'react'

export default function SearchBar({setsearchQuery}) {
 
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search for a country"  
      onChange={(e)=>{
        setsearchQuery(e.target.value)
      }}/>
    </div>
  )
}
