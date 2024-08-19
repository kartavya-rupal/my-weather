const apikey = "a8a89c1e561797c39578d571be7acc28";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + ' %';
    document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

    const iconcode = data.weather[0].icon;
    weathericon.src = `https://openweathermap.org/img/wn/${iconcode}@2x.png`;
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})
searchbox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkweather(searchbox.value);
    }
});
