import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [countryName])
    return (
        <div>
            <h2>Country Name:{countryName}</h2>
            <h3>Area: {country[0]?.area}</h3>
            <img src={country[0]?.flags.png} alt="" />
        </div>
    );
};

export default Country;