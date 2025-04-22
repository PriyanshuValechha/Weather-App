const apiKey = "4b051987749387a29c77ab566400445c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".Weather-Icon");

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            
            if (response.status == 404) {
                
                document.querySelector(".error").style.display = "block";    
                document.querySelector(".weather").style.display = "none";
            }
            else{

                var data = await response.json();

            

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".Wind").innerHTML = data.wind.speed + "Km/h";

            if (data.weather[0].main == "Clouds") {
               WeatherIcon.src = "img/cloudy.png";
            }

            else if (data.weather[0].main == "Clear") {
                WeatherIcon.src = "img/sun.png";
            }

            else if (data.weather[0].main == "Rain") {
                WeatherIcon.src = "img/rainy.png";
            }

            else if (data.weather[0].main == "Drizzle") {
                WeatherIcon.src = "img/drizzle.png";
            }

            else if (data.weather[0].main == "Mist") {
                WeatherIcon.src = "img/mist.png";
            }

            else if (data.weather[0].main == "Thunderstorm") {
                WeatherIcon.src = "img/storm";
            }

            else if (data.weather[0].main == "snow") {
                WeatherIcon.src = "img/snow.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

            }
            
            

        }


        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })
       