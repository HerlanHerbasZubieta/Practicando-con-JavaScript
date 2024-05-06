let API_key = '605507acf87117e111e54a3ab5238541';
let difKelvin = 273.15
let url = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('btnSearch').addEventListener('click', () => {
    const city = document.getElementById('textCity').value;

    if(city){
        fechaDataclimate(city);
    }
})

function fechaDataclimate(city){
    fetch(`${url}?q=${city}&appid=${API_key}`)
    .then(response => response.json())
    .then(data => showDatas(data))
}

function showDatas(data){
    console.log(data)
    const divContainer = document.getElementById('dataClimate');
    divContainer.innerHTML = '';

    const namecity = data.name;
    const country = data.sys.country;
    const temperature = data.main.temp;
    const humestamp = data.main.humidity;
    const description = data.weather[0].description
    const icono = data.weather[0].icon

    const title = document.createElement('h2');
    title.textContent = `${namecity}, ${country}`;

    const valueTemperature = document.createElement('p');
    valueTemperature.textContent = `Con una temperatura de: ${Math.floor(temperature-difKelvin)}`;

    
    const valueHume = document.createElement('p');
    valueHume.textContent = `Con una humedad de: ${humestamp}`;

    const iconoInfo = document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${description}`

    divContainer.appendChild(title);
    divContainer.appendChild(iconoInfo);
    divContainer.appendChild(descripcionInfo);
    divContainer.appendChild(valueTemperature);
    divContainer.appendChild(valueHume);
}




