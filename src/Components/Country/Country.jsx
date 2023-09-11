import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetai/CountryDetail';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population,area,cca3} = country;

    const [visited,setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited);
    }

    const passWithParams = () => {
        handleVisitedCountry(country)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
        {/* // <div className={`country ${visited ? 'visited': 'non-visited'}`}> */}
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population} </p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParams}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button> <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {/* {visited && 'I have visited this country'} */}
            {visited ? 'I have visited this country' : 'I wand to visit'}
            <hr />
            <CountryDetail>
                country ={country}
                handleVisitedCountry = {handleVisitedCountry}
                handleVisitedFlags = {handleVisitedFlags}
            </CountryDetail>
        </div>
    );
};

export default Country;