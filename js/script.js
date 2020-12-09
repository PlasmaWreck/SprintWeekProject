

let weatherInfo;
let currentMornTemp = document.getElementById("currentMornTemp");
let currentNoonTemp = document.getElementById("currentNoonTemp");
let currentNightTemp = document.getElementById("currentNightTemp");
let currentClouds = document.getElementById("currentClouds");
let currentDate = document.getElementById("currentDate");
let currentCity = document.getElementById("currentCity");
let mornArrow = document.getElementById("mornArrow");
let nightArrow = document.getElementById("nightArrow");

let addFavoriteButton = document.getElementById("addButton");
let removeFavoriteButton = document.getElementById("minusButton");
let favoritesList = document.getElementById("favoritesDropDown");




//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
let url_prt1 = "http://api.openweathermap.org/data/2.5/weather?q=";
let citySearch = "stockton";
let apiKey = "&appid=ceb8e04bf6b69bde44708e25d55841cd&units=imperial";

let today = new Date;
let currentDoW = 0;
let currentMonth = 0;


let searchCriteria = document.getElementById("searchCriteria");
let tempName = "";
let tempCountry = "";

let amountFavorited = 0;
let favoritedArray = [];

addFavoriteButton.addEventListener("click", function () {
    

    if (amountFavorited <= 5) {
        
        favoritedArray[amountFavorited] = tempName + ", " + tempCountry;

        localStorage.setItem("favorited", JSON.stringify(favoritedArray));

        listPart = document.createElement("li");
        listPart.setAttribute("id", "favoriteButton" + amountFavorited);
        listPart.classList.add("d-flex", "flex-row", "mr-5");
        listPart.innerHTML = "<p>" + tempName + ", " + tempCountry + "</p>";
        favoritesList.appendChild(listPart);
        amountFavorited++;
    

    } else {
        console.log("memes3");
    }

    console.log(JSON.parse(localStorage.getItem("favorited")));
    console.log(amountFavorited);
});

removeFavoriteButton.addEventListener("click", function () {

    for(i = 0; i < JSON.parse(localStorage.getItem("favorited")).length; i++){
        if(tempName + ", "+ tempCountry === JSON.parse(localStorage.getItem("favorited"))[i]){

            favoritedArray.splice(i,1);

            for(i = 0; i < JSON.parse(localStorage.getItem("favorited")).length; i++){
                document.getElementById("favoriteButton" + i).remove();
                if(amountFavorited > 0){
                    amountFavorited--;
                }
            }

            localStorage.setItem("favorited", JSON.stringify(favoritedArray));

            initializeFavorates();

            console.log(JSON.parse(localStorage.getItem("favorited")));

        }

        
    }
    console.log(amountFavorited);

});



let searchButton = document.getElementById("searchButton").addEventListener("click", function () {

    citySearch = searchCriteria.value;
    loadWeather(url_prt1 + citySearch + apiKey);
    searchCriteria.value = "";

});
searchCriteria.addEventListener("keypress", function (event) {

    if (event.key == "Enter") {

        event.preventDefault();
        citySearch = searchCriteria.value;
        loadWeather(url_prt1 + citySearch + apiKey);
        searchCriteria.value = "";
    }
});


function initializeFavorates() {
    
    
    if (JSON.parse(localStorage.getItem("favorited")) != null) {

        favoritedArray = JSON.parse(localStorage.getItem("favorited"));
        for (i = 0; i < JSON.parse(localStorage.getItem("favorited")).length; i++) {
            listPart = document.createElement("li");
            listPart.setAttribute("id", "favoriteButton" + i);
            listPart.classList.add("d-flex", "flex-row", "mr-5");
            listPart.innerHTML = "<p>" + JSON.parse(localStorage.getItem("favorited"))[i] + "</p>";
            favoritesList.appendChild(listPart);
            amountFavorited++;
        }
    }

    if(amountFavorited <= 1){

        let button0 = document.getElementById("favoriteButton0").addEventListener("click", function(){
            console.log("eas");
            loadWeather(url_prt1 + JSON.parse(localStorage.getItem("favorited"))[0] + apiKey);

        });
    }

}

function loadWeather(url) {

    let weatherData = fetch(url).then(
        response => response.json()
    ).then(data => {

        //this is where you parse your data

        console.log(data);

        if (data.name.length >= 10) {
            tempName = "";
            tempCountry = "";
            for (i = 0; i <= 10; i++) {
                tempName += data.name[i];
            }
            tempName = tempName + "[...]"
        } else {
            tempName = "";
            tempCountry = "";
            tempName = data.name;
        }
        tempCountry = data.sys.country;
        currentCity.innerText = tempName + ", " + tempCountry;
        loadWeatherOneCall(url_OneCall_prt1 + data.coord.lat + "&lon=" + data.coord.lon + apiKey);

    });




}

//call the function


//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
let url_OneCall_prt1 = "https://api.openweathermap.org/data/2.5/onecall?lat=";

function loadWeatherOneCall(url) {

    let weatherData = fetch(url).then(
        response => response.json()
    ).then(data => {
        //this is where you parse your data
        weatherInfo = data.daily;
        currentMornTemp.innerText = parseInt(weatherInfo[0].temp.morn) + "°";
        currentNoonTemp.innerText = parseInt(weatherInfo[0].temp.eve) + "°";
        currentNightTemp.innerText = parseInt(weatherInfo[0].temp.night) + "°";
        loadDates();
        if (weatherInfo[0].clouds == 0) {
            currentClouds.innerText = "Clear Skies"
        } else if (weatherInfo[0].clouds <= 40) {
            currentClouds.innerText = "Partly Cloudy"
        } else if (weatherInfo[0].clouds <= 70) {
            currentClouds.innerText = "Mostly Cloudy"
        } else if (weatherInfo[0].clouds == 100) {
            currentClouds.innerText = "OverCast"
        }

        if (weatherInfo[0].wind_deg >= 0 && weatherInfo[0].wind_deg < 90) {
            mornArrow.src = "./images/downLeftArrow.png";
            nightArrow.src = "./images/downLeftArrow.png";
        } else if (weatherInfo[0].wind_deg >= 90 && weatherInfo[0].wind_deg < 180) {
            mornArrow.src = "./images/downRightArrow.png";
            nightArrow.src = "./images/downRightArrow.png";
        } else if (weatherInfo[0].wind_deg >= 180 && weatherInfo[0].wind_deg < 270) {
            mornArrow.src = "./images/upRightArrow.png";
            nightArrow.src = "./images/upRightArrow.png";
        } else if (weatherInfo[0].wind_deg >= 270) {
            mornArrow.src = "./images/upLeftArrow.png";
            nightArrow.src = "./images/upLeftArrow.png";
        }

    });


}

function getDoW() {

    switch (today.getDay()) {
        case 1:
            return "Monday"

        case 2:
            return "Tuesday"

        case 3:
            return "Wednesday"

        case 4:
            return "Tuesday"

        case 5:
            return "Friday"

        case 6:
            return "Saturday"

        case 1:
            return "Sunday"
    }

}
function loadDates() {

    switch (today.getMonth) {
        case 1:
            currentDate.innerText = getDoW() + ", January, " + today.getDate() + ", " + today.getFullYear();
            break;
        case 2:
            currentDate.innerText = getDoW() + ", February, " + today.getDate() + ", " + today.getFullYear();
            break;
        case 3:
            currentDate.innerText = getDoW() + ", March, " + today.getDate() + ", " + today.getFullYear();
            break;
        case 4:
            currentDate.innerText = getDoW() + ", April, " + today.getDate() + ", " + today.getFullYear();
            break;
        case 5:
            currentDate.innerText = getDoW() + ", May, " + today.getDate() + ", " + today.getFullYear();
            break;
        case 6:
            currentDate.innerText = getDoW() + ", June, " + today.getDate() + ", " + today.getFullYear();
            break;
        case 7:
            currentDate.innerText = getDoW() + ", July, " + today.getDate() + ", " + today.getFullYear();
            break;
        case 8:
            currentDate.innerText = getDoW() + ", August, " + today.getDate() + ", " + today.getFullYear();
            break;
        case 9:
            currentDate.innerText = getDoW() + ", September, " + today.getDate() + ", " + today.getFullYear();
            break;
        case 10:
            currentDate.innerText = getDoW() + ", October, " + today.getDate() + ", " + today.getFullYear();
            break;
        case 11:
            currentDate.innerText = getDoW() + ", November, " + today.getDate() + ", " + today.getFullYear();
            break;
        case 12:
            currentDate.innerText = getDoW() + ", December, " + today.getDate() + ", " + today.getFullYear();
            break;

        default:
            currentDate.innerText = getDoW() + ", December, " + today.getDate() + ", " + today.getFullYear();
            break;
    }
}


//call the function

loadWeather(url_prt1 + citySearch + apiKey);
initializeFavorates()

