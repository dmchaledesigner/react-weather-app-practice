import React from 'react'

const Form = ({ input, setInput, setCity, setCondition, country, setCountry, setTemp, weatherData }) => {



    let url = `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=`;
    let auth = "cd6a745855cce97c6801e9c658f5a8d3";






    // get the value from the input field
    const textHandler = (e) => {
        setInput(e.target.value)
    }



    // when the form is submitted
    const formHandler = (e) => {

        // sto pthe form from submitting
        e.preventDefault();


        // set the city to the value from the input
        setCity(input);


        // set the state elements to the weather data fetch function taken from the app component
        weatherData(input).then((data) => {
            // console.log(data);
            setTemp(data.main.temp);
            setCountry(data.sys.country);
            setCondition(data.weather[0].main);
        })



        setInput('');


        // rest the inout value

    }



    return (
        <form onSubmit={formHandler}>
            {country}
            <input type="text" name='city-value' onChange={textHandler} value={input} />
            <button>submit</button>
            <h1>{country}</h1>

        </form>
    )
}

export default Form;
