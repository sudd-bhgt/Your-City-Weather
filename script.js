async function geoLocationApi() {
  navigator.geolocation.getCurrentPosition(async (position) => {
    // console.log(position);
    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);
    document.getElementById("btn").style.display = "none";
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // const location = { lat: latitude, long: longitude };
    // const map = new google.maps.Map(document.getElementById("map"), {
    //   zoom: 4,
    //   center: location,
    // });

    //**************************************** */

    const requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6832170c1f41418c3ce87d7e3bbad8f5`;
    const weatherData = await fetch(requestUrl);
    console.log(weatherData);

    const jsonData = await weatherData.json();
    console.log(jsonData);

    document.getElementById("info").innerHTML = `<div id = 'align-left'>
    <span class = 'label'>Location: </span> <span class = 'value'>${jsonData.name}, ${jsonData.sys.country}</span>
    <br>
    <span class = 'label'>Latitude: </span> <span class = 'value'>${latitude} </span>
    <br>
    <span class = 'label'>Longitude: </span> <span class = 'value'>${longitude}</span>
    <br>
    <span class = 'label'>TimeZone: </span> <span class = 'value'>${jsonData.timezone}</span>
    <br>
    <span class = 'label'>Wind Speed: </span> <span class = 'value'>${jsonData.wind.speed}</span>
    <br>
    <span class = 'label'>Pressure: </span> <span class = 'value'>${jsonData.main.pressure}</span>
    <br>
    <span class = 'label'>Humidity: </span> <span class = 'value'>${jsonData.main.humidity}</span>
    <br>
    <span class = 'label'>Wind Direction: </span> <span class = 'value'>${jsonData.wind.deg}</span>
    <br>
    <span class = 'label'>UV Index: </span> 
    <br>
    <span class = 'label'>Feels Like: </span> <span class = 'value'>${jsonData.main.feels_like}</span>
    </div>
    `;
  });
}
