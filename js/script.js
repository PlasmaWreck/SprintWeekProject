//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
let url_prt1 = "http://api.openweathermap.org/data/2.5/weather?q=";
let city = "stockton";
let apiKey = "&appid=ceb8e04bf6b69bde44708e25d55841cd";

function loadWeather(url){

    let weatherData = fetch(url).then(
        response => response.json()
    ).then(data => {
        //this is where you parse your data
        console.log(data);
    });
   

}

//call the function
loadWeather(url_prt1 + city + apiKey);

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
loadWeather5Day(url_prt_day5_prt1 + city + apiKey);