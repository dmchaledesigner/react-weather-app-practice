import React from 'react';
import styled from '@emotion/styled';


const Condition = ({ temp, condition }) => {

    const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 3rem;
    color: white;
    font-weight: 400;
    `;

    const State = styled.h3`
    font-family: "Merriweather", serif;
    font-size: 1.2rem;
    color: white;
    font-weight: 200;
    `;

    return (
        <React.Fragment>
            <Temp>{temp} ºC</Temp>
            <State>{condition}</State>
        </React.Fragment>
    );
}

export default Condition;