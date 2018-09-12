import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//when importing the javascript file you can leave off the js extension
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Telling the dom to render out the App component which is the root element in document
//First thing it takes is the App and the second thing it takes is the location of the component
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
