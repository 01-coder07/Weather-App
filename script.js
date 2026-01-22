const input = document.querySelector('.city')
const btn = document.querySelector('.btn')
const loading = document.getElementById("loading");


const weatherbox = document.querySelector(".weather");
const statuss = document.querySelector(".status");

const icon = document.querySelector("#icon")
const temp = document.querySelector("#temp");
const condition =document.querySelector("#condition");
const Location =document.querySelector("#Location");
const humidity =document.querySelector("#humidity");
const wind =document.querySelector("#wind");


async function fetchWeather(){
     const city = input.value;
     if(city == ""){
        btn.disable();
        return;
     }
     const apiKey = '511357dd0ffa1ead77030f7dfc0d7d6f';
     
     try{
      statuss.textContent='';
      weatherbox.classList.add('hidden');
      loading.classList.remove('hidden2');

     const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
    );
     if(!response.ok){
        throw new Error(`Error: ${response.status}`);
     }
     const data = await response.json();
     temp.textContent = `${Math.round(data.main.temp)}°C`;
     humidity.textContent = `Humidity : ${data.main.humidity}% `;
     wind.textContent = `Wind : ${data.wind.speed} m/s`;
     Location.textContent=`${data.name}`;
     condition.textContent = data.weather[0].description.replace(/\b\w/g, (c) =>
     c.toUpperCase(),
     );
     weatherbox.classList.remove('hidden');
     statuss.textContent="";
    } 
     catch(err){
      statuss.textContent = err.message;
     }
     finally{
      loading.classList.add("hidden2");
     }
}

// button event fetch weather
btn.addEventListener('click',fetchWeather);

