import React from "react";
import {ReactComponent as Placeicon} from "../images/place-icon.svg"

function Place(info) {
    return (
        <div className="place-container">
            <img src={info.imageUrl} alt="place" className="place-image"></img>
            <div className="info-container">
                <div className="place-location-info">
                    <Placeicon/>
                    <p className="place-location">{info.location.toUpperCase()}</p>
                    <a href={info.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="google-maps">View on Google Maps</a>
                </div>
                <h1 className="title">{info.title}</h1>
                <p className="date">{info.startDate} - {info.endDate}</p>
                <p className="desc">{info.description}</p>
            </div>
        </div>
    );
}

export default Place;