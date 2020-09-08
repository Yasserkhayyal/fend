/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=ca32e1f19ff1b845ad9df6bb8e1ba8a6';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Event listener to add function to the button with id 'generate'
document.getElementById('generate').addEventListener('click',callApi);

const postData = async ( url = '', data = {})=>{
    console.log(data);
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });
  
  try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
      console.log("error", error);
    }
  }
  

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

function callApi(){
    const zip = document.getElementById('zip').value
    const feelings = document.getElementById('feelings').value
    postData("/",{zip: zip}).then(function(){
        get('/').then(function(data){
            updateUI(data)
        })
    }).catch(function(error){
        console.log("error",error);
    })
}

function updateUI(data){
    console.log(data);
}
