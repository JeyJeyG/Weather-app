const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weatherInfo = document.getElementById("weatherInfo");

const API_KEY = "YOUR_API_KEY" // Replace with your own API
searchButton.addEventListener('click', ()=> {
    const city = cityInput.value;
    if(city){
        getWeather(city);
    }
});

async function getWeather(city) {
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        if(data.cod === 200) {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const cityName = data.name;
            const weatherText = `Weather in ${cityName}: ${temperature}°C: ${description}`;
            weatherInfo.textContent = weatherText;
        }else{
            weatherInfo.textContent = "City not found";

        }

    } catch(error){
        console.error("Error Fetching Weather data:", error);
        weatherInfo.textContent = "An error occured";
    }
}