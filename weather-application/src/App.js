import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles';
import Form from "./components/Form";

//This involves app class extending the react.componnent class
class App extends Component {
  render() {

    //JSX code runs which converts the JSX tag into something javascript can read
    return (

      //has to be within a single div since it can basically only return one parent element
      //such as one div or paragraph, the paragraph has to be within the div function
      //purpose of the react is to have multiple components which combine to one file , which is then 
      //what is imported outside the application
      <div>
        
        <Titles />
        <Form />
      </div>
    );
  }
};

//make this file for the other files to be able to be import.
export default App;
