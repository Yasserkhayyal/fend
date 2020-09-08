const fetch = require('node-fetch');
// Setup empty JS object to act as endpoint for all routes
const projectData = {};

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
app.listen(port,listening);

function listening(){
    console.log('server is running');
    console.log(`on localhost ${port}`);
}

app.post("/",function(req,res){
    projectData.zip = req.body.zip;
    console.log('zip',req.body);
})

app.get("/",function(req,res){
    res.send(projectData.apiResponse);
})
