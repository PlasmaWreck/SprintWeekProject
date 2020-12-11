

let weatherInfo;

let bodyID = document.getElementById("bodyID");

let currentMornTemp = document.getElementById("currentMornTemp");
let currentNoonTemp = document.getElementById("currentNoonTemp");
let currentNightTemp = document.getElementById("currentNightTemp");
let currentClouds = document.getElementById("currentClouds");
let currentDate = document.getElementById("currentDate");
let currentCity = document.getElementById("currentCity");
let mornArrow = document.getElementById("mornArrow");
let nightArrow = document.getElementById("nightArrow");


let secondDoW = document.getElementById("secondDoW");
let secondDate = document.getElementById("secondDate");
let secondMornTemp = document.getElementById("secondMornTemp");
let secondNoonTemp = document.getElementById("secondNoonTemp");
let secondNightTemp = document.getElementById("secondNightTemp");

let thirdDoW = document.getElementById("thirdDoW");
let thirdDate = document.getElementById("thirdDate");
let thirdMornTemp = document.getElementById("thirdMornTemp");
let thirdNoonTemp = document.getElementById("thirdNoonTemp");
let thirdNightTemp = document.getElementById("thirdNightTemp");

let fourthDoW = document.getElementById("fourthDoW");
let fourthDate = document.getElementById("fourthDate");
let fourthMornTemp = document.getElementById("fourthMornTemp");
let fourthNoonTemp = document.getElementById("fourthNoonTemp");
let fourthNightTemp = document.getElementById("fourthNightTemp");

let fifthDoW = document.getElementById("fifthDoW");
let fifthDate = document.getElementById("fifthDate");
let fifthMornTemp = document.getElementById("fifthMornTemp");
let fifthNoonTemp = document.getElementById("fifthNoonTemp");
let fifthNightTemp = document.getElementById("fifthNightTemp");

let sixthDoW = document.getElementById("sixthDoW");
let sixthDate = document.getElementById("sixthDate");
let sixthMornTemp = document.getElementById("sixthMornTemp");
let sixthNoonTemp = document.getElementById("sixthNoonTemp");
let sixthNightTemp = document.getElementById("sixthNightTemp");

let weatherImage1 = document.getElementById("weatherImage1");
let weatherImage2 = document.getElementById("weatherImage2");
let weatherImage3 = document.getElementById("weatherImage3");
let weatherImage4 = document.getElementById("weatherImage4");
let weatherImage5 = document.getElementById("weatherImage5");
let weatherImageArray = [weatherImage1, weatherImage2, weatherImage3, weatherImage4, weatherImage4, weatherImage5];




let addFavoriteButton = document.getElementById("addButton");
let removeFavoriteButton = document.getElementById("minusButton");
let favoritesList = document.getElementById("favoritesDropDown");




//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
let url_prt1 = "http://api.openweathermap.org/data/2.5/weather?q=";
let citySearch = "stockton";
let apiKey = "&appid=ceb8e04bf6b69bde44708e25d55841cd&units=imperial";
let url_OneCall_prt1 = "https://api.openweathermap.org/data/2.5/onecall?lat=";

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


    }

    initializeFavoriteDrop();
});

removeFavoriteButton.addEventListener("click", function () {

    for (i = 0; i < JSON.parse(localStorage.getItem("favorited")).length; i++) {
        if (tempName + ", " + tempCountry === JSON.parse(localStorage.getItem("favorited"))[i]) {

            favoritedArray.splice(i, 1);

            for (i = 0; i < JSON.parse(localStorage.getItem("favorited")).length; i++) {
                document.getElementById("favoriteButton" + i).remove();
                if (amountFavorited > 0) {
                    amountFavorited--;
                }
            }

            localStorage.setItem("favorited", JSON.stringify(favoritedArray));

            initializeFavorates();

            


        }
    }
    
    initializeFavoriteDrop();
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
    initializeFavoriteDrop();
}

function initializeFavoriteDrop() {

    if (amountFavorited >= 1) {

        let button0 = document.getElementById("favoriteButton0").addEventListener("click", function () {
            
            loadWeather(url_prt1 + JSON.parse(localStorage.getItem("favorited"))[0] + apiKey);

        });
    }
    if (amountFavorited >= 2) {

        let button0 = document.getElementById("favoriteButton1").addEventListener("click", function () {
            
            loadWeather(url_prt1 + JSON.parse(localStorage.getItem("favorited"))[1] + apiKey);

        });
    }
    if (amountFavorited >= 3) {

        let button0 = document.getElementById("favoriteButton2").addEventListener("click", function () {
            
            loadWeather(url_prt1 + JSON.parse(localStorage.getItem("favorited"))[2] + apiKey);

        });
    }
    if (amountFavorited >= 4) {

        let button0 = document.getElementById("favoriteButton3").addEventListener("click", function () {
            
            loadWeather(url_prt1 + JSON.parse(localStorage.getItem("favorited"))[3] + apiKey);

        });
    }
    if (amountFavorited >= 5) {

        let button0 = document.getElementById("favoriteButton4").addEventListener("click", function () {
            
            loadWeather(url_prt1 + JSON.parse(localStorage.getItem("favorited"))[4] + apiKey);

        });
    }
    if (amountFavorited == 6) {

        let button0 = document.getElementById("favoriteButton5").addEventListener("click", function () {
            
            loadWeather(url_prt1 + JSON.parse(localStorage.getItem("favorited"))[5] + apiKey);

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


function loadWeatherOneCall(url) {

    let weatherData = fetch(url).then(
        response => response.json()
    ).then(data => {
        //this is where you parse your data
        console.log(data);
        weatherInfo = data.daily;
        
        

        currentMornTemp.innerText = parseInt(weatherInfo[0].temp.morn) + "°";
        currentNoonTemp.innerText = parseInt(weatherInfo[0].temp.eve) + "°";
        currentNightTemp.innerText = parseInt(weatherInfo[0].temp.night) + "°";

        secondMornTemp.innerText = parseInt(weatherInfo[1].temp.morn) + "°";
        secondNoonTemp.innerText = parseInt(weatherInfo[1].temp.eve) + "°";
        secondNightTemp.innerText = parseInt(weatherInfo[1].temp.night) + "°";

        thirdMornTemp.innerText = parseInt(weatherInfo[2].temp.morn) + "°";
        thirdNoonTemp.innerText = parseInt(weatherInfo[2].temp.eve) + "°";
        thirdNightTemp.innerText = parseInt(weatherInfo[2].temp.night) + "°";

        fourthMornTemp.innerText = parseInt(weatherInfo[3].temp.morn) + "°";
        fourthNoonTemp.innerText = parseInt(weatherInfo[3].temp.eve) + "°";
        fourthNightTemp.innerText = parseInt(weatherInfo[3].temp.night) + "°";

        fifthMornTemp.innerText = parseInt(weatherInfo[4].temp.morn) + "°";
        fifthNoonTemp.innerText = parseInt(weatherInfo[4].temp.eve) + "°";
        fifthNightTemp.innerText = parseInt(weatherInfo[4].temp.night) + "°";

        sixthMornTemp.innerText = parseInt(weatherInfo[5].temp.morn) + "°";
        sixthNoonTemp.innerText = parseInt(weatherInfo[5].temp.eve) + "°";
        sixthNightTemp.innerText = parseInt(weatherInfo[5].temp.night) + "°";


        load5DayForcast();

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


function load5DayForcast() {
    switch (today.getMonth()) {
        case 0:
            applyDates("January", 31);
            break;
        case 1:
            if ((today.getFullYear() % 4 == 0) && (today.getFullYear() % 100 != 0) || today.getFullYear() % 400 == 0) {

                applyDates("Febuary", 29);

            } else {

                applyDates("Febuary", 28);

            }
            break;
        case 2:
            applyDates("March", 31);
            break;
        case 3:
            applyDates("April", 30);
            break;
        case 4:
            applyDates("May", 31);
            break;
        case 5:
            applyDates("June", 30);
            break;
        case 6:
            applyDates("July", 31);
            break;
        case 7:
            applyDates("August", 31);
            break;
        case 8:
            applyDates("September", 30);
            break;
        case 9:
            applyDates("October", 31);
            break;
        case 10:
            applyDates("November", 30);
            break;
        case 11:
            applyDates("December", 31);
            break;
    }
    populateWeatherIcons();

}

function applyDates(month, maxDays) {
    currentDate.innerText = getDoW(false, 0) + ", " + month + ", " + today.getDate() + ", " + today.getFullYear();

    secondDoW.innerText = getDoW(true, 1);
    secondDate.innerText = calculateDate(maxDays, 1);

    thirdDoW.innerText = getDoW(true, 2);
    thirdDate.innerText = calculateDate(maxDays, 2);

    fourthDoW.innerText = getDoW(true, 3);
    fourthDate.innerText = calculateDate(maxDays, 3);

    fifthDoW.innerText = getDoW(true, 4);
    fifthDate.innerText = calculateDate(maxDays, 4);

    sixthDoW.innerText = getDoW(true, 5);
    sixthDate.innerText = calculateDate(maxDays, 5);
}

function getDoW(abriviated, futureDays) {

    if (abriviated) {
        if ((today.getDay() + futureDays) > 7) {
            switch ((today.getDay() + futureDays) - 7) {
                case 1:
                    return "Mon"

                case 2:
                    return "Tues"

                case 3:
                    return "Wed"

                case 4:
                    return "Thurs"

                case 5:
                    return "Fri"

                case 6:
                    return "Sat"

                case 7:
                    return "Sun"
            }
        }
        switch ((today.getDay() + futureDays)) {
            case 1:
                return "Mon"

            case 2:
                return "Tues"

            case 3:
                return "Wed"

            case 4:
                return "Thurs"

            case 5:
                return "Fri"

            case 6:
                return "Sat"

            case 7:
                return "Sun"
        }
    } else {
        switch (today.getDay()) {
            case 1:
                return "Monday"

            case 2:
                return "Tuesday"

            case 3:
                return "Wednesday"

            case 4:
                return "Thursday"

            case 5:
                return "Friday"

            case 6:
                return "Saturday"

            case 7:
                return "Sunday"
        }
    }

}
function calculateDate(maxDays, futureDays) {

    if (today.getDate() + futureDays > maxDays) {

        if (today.getMonth() == 11) {
            return "1/" + ((today.getDate() + futureDays) - maxDays) + "/" + (today.getFullYear() + 1);
        } else {
            return today.getMonth() + 2 + "/" + ((today.getDate() + futureDays) - maxDays) + "/" + today.getFullYear();
        }
    } else {
        return today.getMonth() + 1 + "/" + (today.getDate() + futureDays) + "/" + today.getFullYear();
    }
}
function populateWeatherIcons() {

    for (i = 0; i < 6; i++) {
        getWeatherIcon(i);
    }

}

function getWeatherIcon(arrayPos) {

    switch (weatherInfo[arrayPos].weather[0].icon) {
        case "01d":
            weatherImageArray[arrayPos].src = "./images/clearSky.png"
            break;
        case "02d":
            weatherImageArray[arrayPos].src = "./images/fewClouds.png"
            break;
        case "03d":
            weatherImageArray[arrayPos].src = "./images/scatteredClouds.png"
            break;
        case "04d":
            weatherImageArray[arrayPos].src = "./images/brokenClouds.png"
            break;
        case "09d":
            weatherImageArray[arrayPos].src = "./images/showerRain.png"
            break;
        case "10d":
            weatherImageArray[arrayPos].src = "./images/rain.png"
            break;
        case "11d":
            weatherImageArray[arrayPos].src = "./images/thunderStorm.png"
            break;
        case "13d":
            weatherImageArray[arrayPos].src = "./images/snow.png"
            break;
        case "50d":
            weatherImageArray[arrayPos].src = "./images/mist.png"
            break;
    }
}

function loadFullPage() {
    if (today.getHours() <= 8) {
        bodyID.classList.add("morningBG");
    } else if (today.getHours() <= 16) {
        bodyID.classList.add("noonBG");
    } else {
        bodyID.classList.add("eveningBG");
    }
    loadWeather(url_prt1 + citySearch + apiKey);
    initializeFavorates();

};

loadFullPage();