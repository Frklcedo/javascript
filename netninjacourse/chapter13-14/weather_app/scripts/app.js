const cityForm = document.querySelector('.city-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    // const cityDets = data.cityDets;
    // const weather = data.weather;

    // destructire properties
    const { cityDets, weather } = data;

    // Update details
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // update night/day and icons

    let timeSrc = null;
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg';
    // }
    // else{
    //     timeSrc = 'img/night.svg';
    // }

    // ternary operator
    timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src',timeSrc);

    const iconSrc = 'img/icons/' + weather.WeatherIcon + '.svg';
    icon.setAttribute('src', iconSrc);

    // remove d-none
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

};

// city and weather information

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    // return {
    //     cityDets: cityDets,
    //     weather: weather
    // };
    
    return { cityDets, weather };  // shorthand object notation
};

// submit form
cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    if(city != ''){
        updateCity(city).then(data => {
            console.log(data);
            updateUI(data);
        }).catch(err => console.log(err));
    }

});