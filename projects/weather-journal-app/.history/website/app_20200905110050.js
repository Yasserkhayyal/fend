const { get } = require("http");

//API integration data 
const apiKey = '&appid=ca32e1f19ff1b845ad9df6bb8e1ba8a6';
const baseUrl = 'api.openweathermap.org/data/2.5/weather?zip=';

/* Global Variables */
let feelings = '';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click',callApi);

function callApi(){
    const zip = document.getElementById('zip').value
    const apiResponse = getDataFromApi(baseUrl,zip)
    post("/")
}

const getDataFromApi = async (url = '', zip)=>{
    const response = await fetch(url+zip+apiKey);
    try {
        const newData = await response.json();
        console.logs(newData);
        return newData;
    }catch(error) {
        console.log("error", error);
    }
}