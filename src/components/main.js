import React, {useState} from 'react'

import Weather from "./weather";
import CityForm from "./city-form";
import Error from "./error";

import './main.css'


function Main() {
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState('');

    return(
        <div className='app'>
           <div className='weather'>
               <CityForm setWeatherData={setWeatherData} setCity={setCity} city={city} />
               {
                   Object.entries(weatherData).length === 0 ?
                       'Здесь будет погода' : weatherData.error ?
                       <Error/> : <Weather weatherData={weatherData}/>
               }
           </div>
        </div>
    )
}

export default Main