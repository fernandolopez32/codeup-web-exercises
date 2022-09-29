$(function (){

// map display on screen
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const coordinates = document.getElementById('coordinates')
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.495141, 29.4246], // starting position [lng, lat]
        zoom: 9, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
        map.setCenter([-98.495141, 29.4246]);
    });
    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.495141, 29.4246])
        .addTo(map);

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
        let coords = [
            `${lngLat.lng}`,
            `${lngLat.lat}`
        ]
        updateWeather(coords);
    }
    marker.on('dragend', onDragEnd);

//end of map

//default weather for San antonio
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
//logg the current city name
        $('#currentCity').text(`Current city: ${data.city.name}`);
        data.list.forEach((forecast,index)=> {
            if (index % 8 === 0)
                console.log(forecast.wind.deg)
                $('section').append(`
        <div class="card col-8 col-md-3 mt-4 mx-auto my-3 px-0 opacity-75">
            <header class="card-header p-3">${data.list[index].dt_txt.split(" ")[0]}</header>
            <div class="card-body">
                <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="weather symbol"> 
                <p>${data.list[index].main.temp}&#8457</p>
                <p>Desctiption: ${data.list[index].weather[0].description}</p>
            </div>
           
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Humidity: ${data.list[index].main.humidity}%</li>
                <li class="list-group-item">Wind: ${data.list[index].wind.speed} M/H</li>
                <li class="list-group-item">Pressure: ${data.list[index].main.pressure} </li>
            </ul>
        </div>`)
        });
    });
// end of default weather



//function to make the cards after each search
    function printWeather(data){
        $('.container').empty();
        data.list.forEach((forecast,index)=> {
            if (index % 8 === 0)
                // console.log(forecast.weather[0].icon);
                $('section').append(`
        <div class="card col-8 col-md-3 mt-4 mx-auto my-3 px-0 opacity-75">
            <div class="card-header p-3">${data.list[index].dt_txt.split(" ")[0]}</div>
            <div class="card-body">
                <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="weather symbol"> 
                <p>Desctiption: ${data.list[index].weather[0].description}</p>
            </div>
           
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Humidity: ${data.list[index].main.humidity}%</li>
                <li class="list-group-item">Wind: ${data.list[index].wind.speed} M/H</li>
                <li class="list-group-item">Pressure: ${data.list[index].main.pressure} </li>
            </ul>
        </div>`)
        });
    }


    function updateWeather(coordinates) {
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat: coordinates[1],
            lon: coordinates[0],
            units: "imperial"
        }).done(function (data) {
            $('#currentCity').text(`Current city: ${data.city.name}`);

            printWeather(data)
        });
    }


// Search bar and submit button create marker
    document.getElementById("setMarkerButton").addEventListener('click',function (e){
        e.preventDefault();
        const address = document.getElementById('form1').value;
        geocode(address,MAPBOX_API_TOKEN).then(function (coordinates){
            console.log(coordinates)
            const userMarker = new mapboxgl.Marker({draggable: true}).setLngLat(coordinates).addTo(map)
            map.setCenter(coordinates);
            updateWeather(coordinates);
            onDragEnd(coordinates);
        })
    });

});