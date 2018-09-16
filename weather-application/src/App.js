//this webcomponent is the main component which contains all the tiny components
import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const API_KEY = "767ed9a7dc1512091fb873a8e77ca1f4";


class App extends React.Component {

  // //dont ever directly manipulate the state..
  state = {
    temperature: undefined, 
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

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

    if (city && country ) {
    //log the file
        console.log(data);

        // //setting the states
        this.setState({
          temperature: data.main.temp, 
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""

        });
      
    } else {
      this.setState({
        temperature: undefined, 
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter the Values"
    });
  }

}



  render() {
    return(
      <div> 
      
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Weather Finder
          </Typography>
        </Toolbar>
      </AppBar>


      <Titles />
      <Form getWeather={this.getWeather}/>
      <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}

        />

            
      </div>
    );
  }
};

export default App;


