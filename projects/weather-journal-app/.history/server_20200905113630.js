// Setup empty JS object to act as endpoint for all routes
const projectData = {};

//API integration data 
const apiKey = '&appid=ca32e1f19ff1b845ad9df6bb8e1ba8a6';
const baseUrl = 'api.openweathermap.org/data/2.5/weather?zip=';

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
const { response } = require('express');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 8000;
app.listen(port,listening);

function listening(){
    console.log('server is running');
    console.log(`on localhost ${port}`);
}

const getDataFromApi = async (url = '', zip)=>{
    const response = await fetch(url+zip+apiKey);
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log("error", error);
    }
}

app.post("/",function(req,res){
    projectData.zip = req.body.zip;
    console.log('zip',req.body);
    projectData.apiResponse = getDataFromApi(baseUrl,projectData.zip);
})

app.get("/",function(req,res){
    res.send(projectData.apiResponse);
})
