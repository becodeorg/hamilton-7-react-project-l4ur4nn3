import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
    "Monday ",
    "Tuesday ",
    "Wednesday ",
    "Thursday ",
    "Friday ",
    "Saturday ",
    "Sunday ",
];

const Forecast = ({data}) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek),
    );

    return (
        <>
            <div
                className="bg-stone-200 mt-5 ml-5 mr-5 p-5 rounded shadow-xl 
            ">
                <label></label>
                <Accordion allowZeroExpanded>
                    {data.list.splice(0, 7).map((item, idx) => (
                        <AccordionItem key={idx}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="daily-item lg:flex lg:flex-row lg:flex-wrap lg:justify-between lg:items-center lg:content-start">
                                        <label className="day text-2xl md:flex md:justify-center">
                                            {forecastDays[idx]}
                                        </label>
                                        <div className="flex flex-row justify-center">
                                            <img
                                                alt="weather"
                                                className="icon-small"
                                                src={`icons/${item.weather[0].icon}.png`}
                                            />
                                            {/* <label className="description">
                                        {item.weather[0].description}  
                                    </label> */}
                                            <label className="flex content-center self-center temp text-3xl pl-5">
                                                {Math.round(item.main.temp)}°C
                                            </label>
                                        </div>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel />
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </>
    );
};

export default Forecast;
