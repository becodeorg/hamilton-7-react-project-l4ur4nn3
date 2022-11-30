import React from "react";

const Unsplash = ({data}) => {
    return (
        <div className="image">
            <div className="top">
                <img className="w-full brightness-75 
                lg:object-none lg:h-96 lg:w-full
                " src={data.results[0].urls.raw} />
            </div>
        </div>
    );
};

export default Unsplash;