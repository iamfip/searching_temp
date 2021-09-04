const APT_KEY= `b1e4697adfa4bb5affa32ab977f3cd9b`;

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const searchTemperature= () => {
    const city= document.getElementById("city-name").value;
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APT_KEY}&units=metric`;
    
    fetch(url).then(res => res.json())
    .then( data => displayTemperature(data));
    city="",
 
   
}

const displayTemperature = temperature => {

    setInnerText( 'city', temperature.name);
    console.log(temperature);
    setInnerText( 'temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);

    // set weather icon
    const url= `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon= document.getElementById("weather-icon");
    imgIcon.setAttribute('src', url)

} 
