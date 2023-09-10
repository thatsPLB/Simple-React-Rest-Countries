import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population,area,cca3} = country;

    const [visited,setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
        {/* // <div className={`country ${visited ? 'visited': 'non-visited'}`}> */}
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population} </p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button>Mark visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {/* {visited && 'I have visited this country'} */}
            {visited ? 'I have visited this country' : 'I wand to visit'}
        </div>
    );
};

export default Country;