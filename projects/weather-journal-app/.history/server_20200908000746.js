import fetch from 'node-fetch';
// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
import express, { static } from 'express';
// Start up an instance of 
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
import { urlencoded, json } from 'body-parser';
app.use(urlencoded({ extended: false }));
app.use(json());

// Cors for cross origin allowance
import cors from 'cors';
app.use(cors());
// Initialize the main project folder
app.use(static('website'));
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
