$(function (){

    // map display on screen
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmVybmFuZG9sb3BleiIsImEiOiJjbDhlcHBtYncwdXh0M3ZrOTkzcXVkYTJ1In0.U9pGhWUgH8WGFMATBAhcXg';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 3, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
        map.setCenter([-101.83123, 35.206865]);
    })

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        q:     "San Antonio, US"
    }).done(function(data) {
        console.log(data);
        /* this is the end of WEATHER API */
    });

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log(data.list[0].dt_txt.split(" "))
//logg the current city name
        $('#currentCity').text(`Current city: ${data.city.name}`);
    });



// Search bar and submit button create marker
    document.getElementById("setMarkerButton").addEventListener('click',function (e){
        e.preventDefault();
        const address = document.getElementById('form1')
            .value;
        geocode(address,MAPBOX_API_TOKEN).then(function (coordinates){
            console.log(coordinates)
            const userMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)

            map.setCenter(coordinates);
            updateWeather(coordinates);
        })
    })

    function printWeather(data){
        $('.container').empty();
        data.list.forEach((forecast,index)=> {
            if (index % 8 === 0)
                $('section').append(`
        <div class="card col-8 col-md-3 mt-4 mx-auto my-3 px-0">
            <div class="card-header p-3">${data.list[index].dt_txt.split(" ")[0]}</div>
            <p class="card-body">Desctiption: ${data.list[index].weather[0].description}</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Humidity: ${data.list[index].main.humidity}%</li>
                <li class="list-group-item">Wind: ${data.list[index].wind.speed} MPH</li>
                <li class="list-group-item">Pressure: ${data.list[index].main.pressure} </li>
            </ul>
        </div>`)
        });
    }

    function updateWeather(coordinates){
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat:    coordinates[1],
            lon:   coordinates[0],
            units: "imperial"
        }).done(function(data) {
            $('#currentCity').text(`Current city: ${data.city.name}`);

            printWeather(data)
        });
    }

})