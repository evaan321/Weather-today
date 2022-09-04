const API_KEY =`727e92ae3b811b12fece90e93dda885b`;


const loadTemp = (city) => {

const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
fetch (url)
.then(res => res.json())
.then(data =>displaytemp(data))


}

const displaytemp = data => {

    const temp = document.getElementById('temp');

     temp.innerText = data.main.temp;

     const weatherCondition=document.getElementById('weather-condition');

weatherCondition.innerText = data.weather[0].main;
}

document.getElementById('btnSearch').addEventListener('click',function () {

    const searchField = document.getElementById('searchField');

    const city = searchField.value.toLowerCase();

    const newCity = document.getElementById('city-name');

    newCity.innerText =  city.toUpperCase();

    loadTemp(city);



    
    
})



loadTemp('dhaka');