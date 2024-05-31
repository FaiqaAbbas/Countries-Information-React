import { React, useState, useEffect,Link } from "react";
import "./CountryDetails.css";
import { useParams,Link } from "react-router-dom";
export default function CountryDetails() {
  const { countryName } = useParams();
  console.log(countryName);
  const [countryData, setCountryData] = useState("");
  fetch('https://countryapi.io/api/all').
  then(raw=>raw.json())
  .then(data=>{
    console.log(data)
  })
  // // useEffect(function(){
  // //     fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  // //     .then((raw)=>raw.json())
  // //     .then((data)=>{
  // //             setCountryData(data)
  // //         }
  // //     )
  // // },[])

  useEffect(function () {
    fetch("https://reactcountriesdata.netlify.app/public/countriesdata.json")
      .then((raw) => raw.json())
      .then((data) => {
        var country = data.filter((country) => {
          return country.name.common.toLowerCase() === countryName.toLowerCase();
        });
        setCountryData({
          name:country[0].name.common,
          flag:country[0].flags.svg,
          officialName:country[0].name.official,
          nativeName:Object.keys(country[0].name.nativeName).map((key) => (
            <span key={key}>
              {country[0].name.nativeName[key].common}
            </span>
          )),

          population:country[0].population.toLocaleString("en-IN"),
          region: country[0].region,
          subRegion:country[0].subregion,
          capital:country[0].capital[0],
          tld:country[0].tld[0],
          curruncies:Object.values(country[0].currencies)
          .map((currency) => currency.name)
          .join(", "),
          languages:Object.values(country[0].languages).join(", "),
          borders:country[0].borders? Object.values(country[0].borders).map((border)=>{
            return <Link to={`/${border}`} className="link">{`${border}`}</Link>
          }):'No Bordering Countries Found'

        });
      });
  }, [countryName]);
  console.log(countryData);
  return countryData === "" ? (
    "loading..."
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
                <b>Official Name: {countryData.officialName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Native Name:{countryData.nativeName}
                  {}
                </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population:{countryData.population}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>
                  Currencies:{countryData.curruncies}
                </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>
                  Languages:
                  {countryData.languages}
                </b>
                <span className="languages"></span>
              </p>
              <p className="border-countries"> 
                <b>
                  Border-Countries:                 
                  
                    {countryData.borders}
                
                </b>
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </main>
  );
}
