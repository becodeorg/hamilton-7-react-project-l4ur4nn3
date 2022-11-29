import React from "react";

const Unsplash = ({data}) => {
    return (
        <div className="image">
            <div className="top">
                <img className="w-full brightness-75" src={data.results[0].urls.regular} />
            </div>
        </div>
    );
};

export default Unsplash;