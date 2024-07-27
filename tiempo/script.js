document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '0635c581979f440799c103147242707'; 
    const getWeatherButton = document.getElementById('getWeather');
    const weatherDataDiv = document.getElementById('weatherData');

    getWeatherButton.addEventListener('click', function() {
        const city = document.getElementById('city').value;
        if (city) {
            fetchWeather(city);
        } else {
            alert('Por favor, ingresa el nombre de una ciudad.');
        }
    });

    function fetchWeather(city) {
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    weatherDataDiv.innerHTML = `<p>Error: ${data.error.message}</p>`;
                } else {
                    displayWeather(data);
                }
            })
            .catch(error => {
                weatherDataDiv.innerHTML = `<p>Error: ${error.message}</p>`;
            });
    }

    function displayWeather(data) {
        const { location, current, forecast } = data;
        const forecastDay = forecast.forecastday[0];

        weatherDataDiv.innerHTML = `
            <h2>Clima en ${location.name}</h2>
            <p><strong>Condición Actual:</strong> ${current.condition.text}</p>
            <p><strong>Temperatura:</strong> ${current.temp_c} °C</p>
            <p><strong>Humedad:</strong> ${current.humidity}%</p>
            <p><strong>Viento:</strong> ${current.wind_kph} km/h</p>
            <h3>Pronóstico para Hoy:</h3>
            <p><strong>Máx. Temp:</strong> ${forecastDay.day.maxtemp_c} °C</p>
            <p><strong>Mín. Temp:</strong> ${forecastDay.day.mintemp_c} °C</p>
            <p><strong>Condición:</strong> ${forecastDay.day.condition.text}</p>
        `;
    }
});
