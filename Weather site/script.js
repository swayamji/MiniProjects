const apiKey = "2fffa3b347ae477b28999f98f9716268";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style="display:block"
         document.querySelector(".weather").style="display:none"
    }
    else{
         document.querySelector(".error").style="display:none"
        var data = await response.json();
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".Wind").innerHTML = Math.round(data.wind.speed )+ " km/h";
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="/Weather site/images/clouds.png"
        }
       else if(data.weather[0].main=="Clear"){
            weatherIcon.src="/Weather site/images/clear.png"
        }
       else if(data.weather[0].main=="Rain"){
            weatherIcon.src="/Weather site/images/rain.png"
        }
       else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="/Weather site/images/drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="/Weather site/images/mist.png"
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src="/Weather site/images/snow.png"
        }
    
        document.querySelector(".weather").style="display:block"
        
    }
    }
   
function handlesearch(){
    checkWeather(searchBox.value);
}

searchBtn.addEventListener("click",handlesearch);

searchBox.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        handlesearch();
    }
});