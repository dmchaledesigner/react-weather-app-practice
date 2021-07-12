import React from 'react';
import styled from '@emotion/styled';
import Location from './Location';
import Icon from './Icon';
import Condition from './Condition';



const WeatherCard = ({ temp, condition, city, country }) => {

    // set variables otherwise we get a not declared error
    let highColor = 0;
    let lowColor = 0;
    let bg;


    // if the temperature is greater then 12 degrees - show HOT weather value
    if (temp > 12) {
        highColor = (1 - (temp - 12) / 28) * 255;
        lowColor = highColor - 150;
        bg = `linear-gradient(to top, rgb(255, ${highColor}, 0), rgb(255, ${lowColor}, 0))`;
    } else if (temp <= 12) {  // if the temperature is less then 12 degrees - show COLD weather value
        highColor = (1 - (temp + 20) / 32) * 255;
        lowColor = highColor - 150;
        bg = `linear-gradient(to top, rgb(0, ${highColor}, 255), rgb(0, ${lowColor}, 255))`;
    }


    const Card = styled.div`
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${bg};
    justify-content: space-evenly;
    border-radius: 20px;
    `
    return (
        <Card>
            <Location city={city} country={country} />
            <Icon condition={condition} />
            <Condition temp={temp} condition={condition} />
        </Card>
    );
}

export default WeatherCard;
