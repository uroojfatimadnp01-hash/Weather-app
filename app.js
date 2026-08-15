const inputCity = document.querySelector("#input-city");
const searchBtn = document.querySelector(".search-btn");
const tempDisplay = document.querySelector("#temp-display");
const weatherCondition = document.querySelector("#weather-condition");
const humidity = document.querySelector(".humidity-display");
const wind = document.querySelector(".wind-display");
const city = document.querySelector("#city-name");
const weatherIcon = document.querySelector("#weather-icon");






searchBtn.addEventListener("click" , async ()=>{
    let cityName = inputCity.value ;
    if(cityName ==""){
        alert("Please enter the city name... ");
    }else{
        console.log(cityName);
        let promise = await fetch("http://api.openweathermap.org/data/2.5/weather" + "?q=" +cityName+ "&appid=" + "2f9f48b8a4bbe6a5ee3b454f56a8135a" +  "&units=metric" );
        if(!promise.ok){
            alert("Please enter the correct spelling.");
            return;
        }
        let data =  await promise.json();
        tempDisplay.innerText = data.main.temp +"°C" ;
        city.innerText = data.name ;
        weatherCondition.innerText = data.weather[0].main;
        humidity.innerText = "Humidity:" + data.main.humidity +"%" ;
        wind.innerText = "Wind:" + data.wind.speed + "km/h";
        let icon = data.weather[0].icon ;
        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
});





 
