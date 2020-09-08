
/* Global Variables */
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

function updateUI(data){
    console.log(data);
}
