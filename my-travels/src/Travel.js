// src/Travel.js
import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <figure>
        <img src={photo} alt={destination} />
        <figcaption>
            <blockquote>{destination}</blockquote>
            <p>{country}</p>
            <cite>{distance}</cite>
        </figcaption>
    </figure>
);

export default Travel;