const apiKey = "fd593deda27e2813d6d5d9f845794fe1";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    const weatherInfo = document.querySelector(".weather-info");

    async function checkWeather(city) {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

      if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
      } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        if(data.weather[0].main == "Clouds"){
          weatherIcon.src = "images/clouds.png";
          weatherInfo.querySelector("h2").innerHTML = "Cloudy";
        }
        else if(data.weather[0].main == "Clear"){
          weatherIcon.src = "images/clear.png";
          weatherInfo.querySelector("h2").innerHTML = "Clear";
        }
        else if(data.weather[0].main == "Rain"){
          weatherIcon.src = "images/rain.png";
          weatherInfo.querySelector("h2").innerHTML = "Rainy";
        }
        else if(data.weather[0].main == "Drizzle"){
          weatherIcon.src = "images/drizzle.png";
          weatherInfo.querySelector("h2").innerHTML = "Drizzling";
        }
        else if(data.weather[0].main == "Mist"){
          weatherIcon.src = "images/mist.png";
          weatherInfo.querySelector("h2").innerHTML = "Misty";
        }
        else if(data.weather[0].main == "Snow"){
          weatherIcon.src = "images/snow.png";
          weatherInfo.querySelector("h2").innerHTML = "Snowy";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
      }
    }

    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
    });