
citySearch = "";




//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
let url_prt1 = "http://api.openweathermap.org/data/2.5/weather?q=";
let city = "stockton";
let apiKey = "&appid=ceb8e04bf6b69bde44708e25d55841cd";


let searchButton = document.getElementById("searchButton").addEventListener("click", function(){
    citySearch = searchCriteria.value;
    loadWeather(url_prt1 + citySearch +apiKey);
    loadWeather5Day(url_prt_day5_prt1 + citySearch +apiKey);
});
let searchCriteria = document.getElementById("searchCriteria");



function loadWeather(url){

    let weatherData = fetch(url).then(
        response => response.json()
    ).then(data => {
        //this is where you parse your data
        console.log(data);
    });
   

}

//call the function


//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
let url_prt_day5_prt1 = "http://api.openweathermap.org/data/2.5/forecast?q=";

function loadWeather5Day(url){

    let weatherData = fetch(url).then(
        response => response.json()
    ).then(data => {
        //this is where you parse your data
        console.log(data);
    });
   

}

//call the function
