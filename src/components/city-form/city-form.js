import React from 'react';
import axios from "axios";

const CityForm = ({weatherData, setWeatherData, setCity, city}) => {

    const API_KEY = '11b04fe6dd1464c93c762f9943f5626e';

    const getWeatherData = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(({data}) => {
                setWeatherData(data);
            })
            .catch(() => {
                setWeatherData({...weatherData, error: true})
            })
    };

    const inputHandler = (e) => {
        setCity(e.target.value)
    };

    return (
        <div>
            <form onSubmit={getWeatherData} action="" className='d-flex justify-between'>
                <input type="text" placeholder='Введите город' onChange={inputHandler} className="form-control"/>
                <button type='submit' className="btn btn-primary">Узнать погоду</button>
            </form>
        </div>
    )
};

export default CityForm