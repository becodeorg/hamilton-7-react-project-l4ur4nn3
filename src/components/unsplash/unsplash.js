import React from "react";

const Unsplash = ({data}) => {
    return (
        <div className="image">
            <div className="top">
                <img src={data.results[0].urls.thumb} />
            </div>
        </div>
    );
};

export default Unsplash;
