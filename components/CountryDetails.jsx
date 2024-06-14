import { React, useState, useEffect,Link } from "react";
import "./CountryDetails.css";
import CountryDetailsShimmer from "./CountryDetailsShimmer";
import { useParams,Link } from "react-router-dom";
export default function CountryDetails() {
  const { countryName } = useParams();
  console.log('entered',countryName);
  const [countryData, setCountryData] = useState("");
  useEffect(function () {
    fetch("https://reactcountriesdata.netlify.app/public/countriesdata.json")
      .then((raw) => raw.json())
      .then((data) => {
        var [country] = data.filter((country) => {
          return country.name.common.toLowerCase() === countryName.toLowerCase();
        });
        console.log(country.borders)
        // console.log(Object.values(Object.values(country.name.nativeName)[0])[1])
        console.log('setting country data for the first time')
        setCountryData({
          name:country.name.common?country.name.common:"Not Found",
          flag:country.flags.svg,
          officialName:country.name.official,
          nativeName:country.name.nativeName?
          Object.values(Object.values(country.name.nativeName)[0])[1]:'No native name found',

          population:country.population.toLocaleString("en-IN"),
          region: country.region,
          subRegion:country.subregion,
          capital:country.capital?country.capital[0]:'Not Found',
          tld:country.tld?country.tld[0]:"Not Found",
          curruncies:country.currencies?Object.values(country.currencies)
          .map((currency) => currency.name)
          .join(", "):'Not Found',
          languages:country.languages?Object.values(country.languages).join(", "):'No languages found',
          border: []
        })

        if(!country.borders) {
          country.borders = []
        }

        Promise.all(country.borders.map(async (border) => {
          return await fetch(`https://reactcountriesdata.netlify.app/public/borders/${border.toLowerCase()}.json`)
          .then((res) => res.json())
          .then(([borderCountry]) => {
            // console.log(borderCountry.name.common)
            return borderCountry.name.common
            })
        })).then((borders) => {
          console.log('set country dafta 2nd time for borders')
          setCountryData((prevState) => ( {...prevState, border:borders}))
        })
      
      });
  }, [countryName]);
  // console.log(countryData);
  return countryData === "" ? (
    <CountryDetailsShimmer />
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img
            src={countryData.flag}
            alt={`${countryData.name} flag`}
          />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Official Name: </b>
                {countryData.officialName}
              </p>
              <p>
                <b>Native Name: </b>
                {countryData.nativeName}
           
              </p>
              <p>
                <b>Population: </b>
                {countryData.population}
            
              </p>
              <p>
                <b>Region: </b>
                {countryData.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {countryData.subRegion}
              </p>
              <p>
                <b>Capital: </b>
                {countryData.capital}
              </p>
              <p>
                <b>Top Level Domain: </b>
                {countryData.tld}
              </p>
              <p>
                <b>Currencies: </b>
                {countryData.curruncies}
              </p>
              <p>
                <b>Languages: </b>
                {countryData.languages}
              </p>
             
            </div>
            <p className="border-countries"> 
                <b>Border-Countries: </b>
                {countryData.border.length!=0?
                   countryData.border.map((border)=>
                    <Link to={`/${border}`} className="link">{border}</Link>
                   ):<span>Not Found</span>
                  }
              </p>
          </div>
        </div>
      </div>
    </main>
  );
}
