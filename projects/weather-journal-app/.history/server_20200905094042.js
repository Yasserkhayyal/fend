// Setup empty JS object to act as endpoint for all routes
projectData = {};

//API integration data 
const apiKey = 'ca32e1f19ff1b845ad9df6bb8e1ba8a6';
const baseUrl = 'api.openweathermap.org/data/2.5/weather?';

const getDataFromApi = async ( url = '', data = {})=>{
    console.log(data);
    const response = await fetch(url, {
    method: 'GET', 
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  
  try {
    const newData = await response.json();
    console.log(newData);
  }catch(error) {
    console.log("error", error);
  }
}

// Require Express to run server and routes
const express = require('express');
// Start up an instance of 
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 8000;
app.listen(port,listening)

function listening(){
    console.log('server is running');
    console.log(`on localhost ${port}`);
}