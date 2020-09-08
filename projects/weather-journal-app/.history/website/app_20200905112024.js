const { get } = require("http");

/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click',callApi);

function callApi(){
    const zip = document.getElementById('zip').value
    const feelings = document.getElementById('feelings').value
    post("/",{zip: zip}).then(function(){
        get('/').then(function(data){
            updateUI(data)
        })
    }).catch(function(error){
        console.log("error",error);
    })
}
