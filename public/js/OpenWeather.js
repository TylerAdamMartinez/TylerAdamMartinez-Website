import openWeatherAPI from "./OpenWeather_API_Key.js";

const getCurrentWeather = async(currentLocation) => {
    let url = "https://api.openweathermap.org/data/2.5/weather?";
    let currentWeatherRequest = await fetch(`${url}lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${openWeatherAPI.key}&units=imperial`)
    .then((response) => {
        return response.json();
    });

    let openWeatherImage = document.querySelector('#openWeatherImage');
    let description = currentWeatherRequest.weather[0].description;
    openWeatherImage.setAttribute("alt", `Image of ${description}`);
    openWeatherImage.setAttribute("src", `/weather_icons/${currentWeatherRequest.weather[0].icon}.svg`);
   
    let openWeatherCurrentTemperature = document.querySelector('#openWeatherCurrentTemperature');
    openWeatherCurrentTemperature.innerHTML = `${Math.round(currentWeatherRequest.main.temp)}&degF`;

    let openWeatherMinMaxTemperature = document.querySelector('#openWeatherMinMaxTemperature');
    openWeatherMinMaxTemperature.innerHTML = `H: ${Math.round(currentWeatherRequest.main.temp_max)}&degF- L: ${Math.round(currentWeatherRequest.main.temp_min)}&degF`;

    let openWeathopenWeatherCurrentDescription = document.querySelector('#openWeatherCurrentDescription');
    openWeathopenWeatherCurrentDescription.innerHTML = `${description}`;
}

let kellerTX = {
    latitude: 32.9342, 
    longitude: -97.2293,
};
getCurrentWeather(kellerTX);
