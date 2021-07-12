import React from 'react';
import styled from '@emotion/styled';

const Icon = ({ condition }) => {

    // console.log(condition); = gets the string value of initial state value which is 'Cloudy'

    let icon;

    // if the condition is equal to cloudy, then attach the value of the path of the image to the icon
    // then pass the icon variable inside the the icon render as its source
    switch (condition) {
        case "Clouds":
            icon = `./img/Mostly Cloudy-2x.png`;
            break;
        case "Clear":
            icon = `./img/Mostly Sunny-2x.png`;
            break;
        case "Haze":
            icon = `./img/Haze-2x.png`;
            break;
        case "Hail":
            icon = `./img/Hail-2x.png`;
            break;
        case "Fog":
            icon = `./img/Fog-2x.png`;
            break;
        case "Tornado":
            icon = `./img/Tornado-2x.png`;
            break;
        case "Dust":
            icon = `./img/Dust-2x.png`;
            break;
        case "Mist":
            icon = `./img/Fog-2x.png`;
            break;
        case "Snow":
            icon = `./img/Snow-2x.png`;
            break;
        case "Rain":
            icon = `./img/Rain-2x.png`;
            break;
        case "Drizzle":
            icon = `./img/Drizzle-2x.png`;
            break;
        case "Thunderstorm":
            icon = `./img/Severe Thunderstorm-2x.png`;
            break;
        default:
            icon = `./img/Fog-2x.png`;
            break;
    }







    const Icon = styled.img`
    width: 45%;
    height: auto;
    text-align: center;
    `;

    return (
        <>

            <Icon src={icon} alt="icon" />
        </>
    )
}

export default Icon
