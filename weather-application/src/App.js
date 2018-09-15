//this webcomponent is the main component which contains all the tiny components
import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "767ed9a7dc1512091fb873a8e77ca1f4";
//const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric";

class App extends React.Component {
  //render displays the data within the components returns JSX
  //purpose of the react is to have smaller components which are in one big file which is exported into an html element

  //creating a function to get the weather from the API
  getWeather = async (e) => {

    e.preventDefault();
    
    //the city and the country constants
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    //convert the resposne to the API call to a JSON format
    const data = await api_call.json();

    //log the file
    console.log(data);
  }



  render() {
    return(
      <div> 

      <Titles />
      <Form getWeather={this.getWeather}/>
      <Weather />

            
      </div>
    );
  }
};

export default App;


