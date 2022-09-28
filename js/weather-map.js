$(function (){
    // map display on screen
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
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
    })

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        q:     "San Antonio, US",
        units: "imperial"
    }).done(function(data) {
        console.log(data)
        /* this is the end of WEATHER API */
    });

// Search bar and submit button create marker
    document.getElementById("setMarkerButton").addEventListener('click',function (e){
        e.preventDefault();
        const address = document.getElementById('form1').value;
        geocode(address,MAPBOX_API_TOKEN).then(function (coordinates){
            console.log(coordinates)
            const userMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
            map.setCenter(coordinates);
            updateWeather(coordinates);
        })
    });

    function printWeather(data){
        $('.container').empty();
        data.list.forEach((forecast,index)=> {
            if (index % 8 === 0)
                // console.log(forecast.weather[0].icon);
                $('section').append(`
        <div class="card col-8 col-md-3 mt-4 mx-auto my-3 px-0">
            <div class="card-header p-3">$forecast[index].dt_txt.split(" ")[0]}</div>
            <div class="card-body">
                <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="weather symbol"> 
                <p>Desctiption: ${forecast[index].weather[0].description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Humidity: ${forecast[index].main.humidity}%</li>
                <li class="list-group-item">Wind: ${forecast[index].wind.speed} MPH</li>
                <li class="list-group-item">Pressure: ${forecast[index].main.pressure} </li>
            </ul>
        </div>`)
        });
    }

    function updateWeather(coordinates = [29.42683435532012, -98.48944937443318]){
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat:    coordinates[1],
            lon:   coordinates[0],
            units: "imperial"
        }).done(function(data) {
            console.log(data.city.name)
            $('#currentCity').text(`Current city: ${data.city.name}`);

            printWeather(data)
        });
    }



});