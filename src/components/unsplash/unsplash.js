import React from "react";
import axios from "axios";
import { useState } from "react";

const Unsplash=() => {
    const [image, setImage] = useState("");
    const clientId = "axCzYs2MT79rPhUMu_psQ27TE7uwl6aMAzjERK3oWAs";
    const [result, setResult] = useState([]);
    const handleChange = (event) => {
        setImage(event.target.value);
    };
    const handleSubmit = () => {
        console.log(image);
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + clientId;
        axios.get(url).then((response) => {
            console.log(response);
            setResult(response.data.results);
        });
    };
    return (
        <div className="app">
            <div className="heading">
                <h1>React Image Search Using Unsplash API.</h1>
            </div>

            <div className="input">
                <input onChange={handleChange} type="text" name="image" placeholder="Search for images" />
            </div>
            <button onClick={handleSubmit} type="submit">Search</button>
            <div className="result">
                {result.map((image) => (
                    <>
                        <div className="card">
                            <img src={image.urls.thumb} />
                        </div>
                    </>
                ))}
            </div>
        </div>
    );}

    export default Unsplash;