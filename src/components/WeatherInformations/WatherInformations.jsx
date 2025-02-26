/* eslint-disable react/prop-types */

function WeatherInformations({ weather }) {
  console.log(weather);

  return (
    <div>
      <h2>{weather.name}</h2>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        />
        <p>{Math.round(weather.main.temp)}°C</p>
      </div>
    <p>{weather.weather[0].description}</p>

    <div>
      <p>Sensação Térmic: {Math.round(weather.main.feels_like)} °C</p>
      <p>Umidade: {weather.main.humidity}%</p>
      <p>Pressão: {weather.main.pressure}</p>
    </div>
    </div>
  );
}

export default WeatherInformations;
