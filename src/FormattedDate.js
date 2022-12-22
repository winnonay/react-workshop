import React from "react";

export default function FormattedDate(props) {
    console.log(props.date);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursdays", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return <div className="date">{day} {hours}:{minutes}</div>
}