import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <nav>

            {
                countries.map(country =>
                    <Link to={`/countries/${country.name.common}`}
                        key={country.cca3}
                    >{country.name.common}</Link>
                )
            }
            <Outlet></Outlet>
        </nav >

    );
};

export default Countries;