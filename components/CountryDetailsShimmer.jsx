import { React, useState, useEffect,Link } from "react";
import "./CountryDetailsShimmer.css";

import { useParams,Link } from "react-router-dom";
export default function CountryDetailsShimmer() {
 
  return (
    <main>
    <div className="country-details-container">
      <span className="back-button" onClick={() => history.back()}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      <div className="country-details shimmer-text">
        <img className="shimmer-image"
        
        />
        <div className="details-text-container shimmer-text">
          <h1 style={{backgroundColor: "rgb(158, 158, 158)", width:"max-content"}}>Moldovo</h1>
          <div className="details-text">
            <p>
              <b>Official Name: </b>
              asdfasdfasdf
            </p>
            <p>
              <b>Native Name: </b>
             asdfasdfsadfasdf
            </p>
            <p>
              <b>Population: </b>
              sdfasdfasdfasdfad
          
            </p>
            <p>
              <b>Region: </b>
              adsfasdfasdfasdfa
            </p>
            <p>
              <b>Sub Region: </b>
              sdfasdfasdfasdf
            </p>
            <p>
              <b>Capital: </b>
             asdfasdfadfadf
            </p>
            <p>
              <b>Top Level Domain: </b>
             asdfasdfasdfasdf
            </p>
            <p>
              <b>Currencies: </b>
              asdfasdfasdfasdfasdf
            </p>
            <p>
              <b>Languages: </b>
              asdfasdfadfasdfasdf
            </p>
           
          </div>
          <p className="border-countries"> 
              <b>Border-Countries: </b>
          
            </p>
        </div>
      </div>
    </div>
  </main>
  )
}
