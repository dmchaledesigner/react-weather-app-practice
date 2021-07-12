import React from 'react';
import styled from '@emotion/styled';



const Location = ({ city, country }) => {


    const Container = styled.div`
    text-align: center;`;

    const City = styled.h1`
    font-family: "Merriweather", serif;
    font-size: 1.6rem;
    color: white;
    font-weight: 300;
    `;

    const Country = styled.h3`
    font-family: "Fira Sans", sans-serif;
    font-size: 1.1rem;
    color: white;
    `;
    return (
        <Container>
            <City>{city}</City>
            <Country>{country}</Country>
        </Container>
    );
}

export default Location;