import React from "react";

const CurrentWeather = ({data}) => {
    return (
        <div>                
            <p className="city text-2xl p-5 text-center text-stone-100 bg-yellow-800">{data.city}</p>

        <div className="weather bg-stone-200 ml-5 mr-5 p-5 rounded">
            <div className="top">
                <p>
                    {data.weather[0].description}
                </p>
            </div>
            <img
                alt="weather"
                className="weather-icon"
                src={`icons/${data.weather[0].icon}.png`}
            />
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like </span>
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
