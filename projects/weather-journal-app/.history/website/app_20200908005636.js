/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=ca32e1f19ff1b845ad9df6bb8e1ba8a6';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Event listener to add function to the button with id 'generate'
document.getElementById('generate').addEventListener('click',callApi);

/* Function called by event listener */
function callApi(){
  const zip = document.getElementById('zip').value
  const feelings = document.getElementById('feelings').value
  getDataFromApi(baseUrl,zip).then(function(data){
    // Create a new date instance dynamically with JS
      let d = new Date();
      let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();//adding one to month as its zero-based
      postData('/all',{apiResponse:data,feelingsKey:feelings,dateKey:newDate}).then(function(data){
        updateUI(data);
      })
  })
}

/* Function to GET Web API Data*/
const getDataFromApi = async (url = '', zip)=>{
  const response = await fetch(url+zip+apiKey);
  try {
      const newData = await response.json();
      return newData;
  }catch(error) {
      console.log("error", error);
  }
}

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
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
      return newData;
    }catch(error) {
      console.log("error", error);
    }
  }


function updateUI(data){
    console.log(data);
    document.getElementById('date').innerHTML = data.all.dateKey;
    document.getElementById('temp').innerHTML = data.all.apiResponse.main.temp;
    document.getElementById('content').innerHTML = data.all.feelingsKey;
}
