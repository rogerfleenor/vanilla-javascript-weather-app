//Using the browser document API we can select tags from our html doc by attribute
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

var city = document.querySelector('.input_text'); //Select by class
var main = document.querySelector('#name'); //Select by id
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc'); 
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

//This event listener waits to be triggerred by our submit button
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

button.addEventListener('click', function(name){
  //this is the url we will pass in our city name as selected from our text field
  //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&units=Imperial&appid=9ebbb225f06a23e1c3136f425035757a')
  
  //the response from the API is received and parsed as a JSON object
  //visit the url in your browser for a look at the response we can expect: https://api.openweathermap.org/data/2.5/weather?q=ATLANTA&units=Imperial&appid=9ebbb225f06a23e1c3136f425035757a 
  .then(response => response.json())

  //we use specific syntax to extract the data we want from the response
  .then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    //we will now return the values we got from the response JSON back into our html doc
    //https://www.w3schools.com/jsref/prop_html_innerhtml.asp
    main.innerHTML = nameValue;
    desc.innerHTML = descValue;
    temp.innerHTML = tempValue+" °F";
    city.value ="";
  })

  //If the API does not recognize the city name it will respond with an error
  //we can catch the error and alert the user with a message box 
  .catch(err => alert("Wrong city name!"));
  
})

//Roger Fleenor