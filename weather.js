let valuesearch = document.getElementById('valuesearch');
let city = document.getElementById('city');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let clouds = document.getElementById('cloud');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form =  document.querySelector('form')
let main = document.querySelector('main')
let id = '1fb58cd120e6103a19f2b56b935acadf';


form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(valuesearch.value != ""){
        searchWeather();
    }
})



const searchWeather = () =>{
let cityName = valuesearch.value.trim();     
let url  = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${id}&units=metric`;

    fetch(url)
    .then(responsive => responsive.json())
    .then(data => {
        console.log(data)
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src = 'https://flagsapi.com/'+ data.sys.country +'/shiny/32.png';

            temperature.querySelector('img').src = 'http://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png';
            temperature.querySelector('figcaption span').innerText = data.main.temp

            description.innerText = data.weather[0].description;
            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure
        }else{
            main.classList.add('error')
            setTimeout(() =>{
                main.classList.remove('error')
            },1000)
        }

        valuesearch.value = '';
    })
}

const initApp = function(){
    valuesearch.value = 'nigeria'
    searchWeather()
}
initApp();