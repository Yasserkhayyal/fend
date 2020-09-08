const { get } = require("http");

/* Global Variables */
let feelings = '';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click',callApi);

function callApi(){
    const zip = document.getElementById('zip').value
    if(zip === "")
    post("/")
}