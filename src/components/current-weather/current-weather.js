import React from "react";

const CurrentWeather = ({data}) => {
    return (
        <div>                
            <p className="city text-3xl p-5 text-center text-stone-100 bg-yellow-800">{data.city}</p>

        <div className="weather bg-stone-200 ml-5 mr-5 p-5 rounded shadow-xl">
            <div className="flex justify-center">
            <img
                alt="weather"
                className="weather-icon"
                src={`icons/${data.weather[0].icon}.png`}
            />
            </div>
            <div className="top">
                <p className="capitalize text-xl text-center">
                    {data.weather[0].description}
                </p>
            </div>
            
            <div className="bottom">
                <p className="temperature text-5xl mt-5 mb-5">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row text-sm italic">
                        <span className="parameter-label lowercase">Feels like </span>
                        <span className="parameter-value">
                            {Math.round(data.main.feels_like)}°C
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CurrentWeather;
