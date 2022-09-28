$(function (){
    // util functions
    //function for cardinal directions from degrees
    function windCardinalDirection(degrees){
        let cardinalDirection = '';
        if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
            cardinalDirection = "N";
        } else if (degrees > 11.25 && degrees  <= 33.75) {
            cardinalDirection = "NNE";
        } else if (degrees > 33.75 && degrees <= 56.25) {
            cardinalDirection = "NE";
        } else if (degrees > 56.25 && degrees <= 78.75) {
            cardinalDirection = "ENE";
        } else if (degrees > 78.75 && degrees <= 101.25) {
            cardinalDirection = "E";
        } else if (degrees > 101.25 && degrees <= 123.75) {
            cardinalDirection = "ESE";
        } else if (degrees > 123.75 && degrees <= 146.25) {
            cardinalDirection = "SE";
        } else if (degrees > 146.25 && degrees <= 168.75) {
            cardinalDirection = "SSE";
        } else if (degrees > 168.75 && degrees <= 191.25) {
            cardinalDirection = "S";
        } else  if (degrees > 191.25 && degrees <= 213.75) {
            cardinalDirection = "SSW";
        } else if (degrees > 213.75 && degrees <= 236.25)  {
            cardinalDirection = "SW";
        } else if (degrees > 236.25 && degrees <= 258.75) {
            cardinalDirection = "WSW";
        } else if (degrees > 258.75 && degrees <= 281.25) {
            cardinalDirection = "W";
        } else if (degrees > 281.25 && degrees <= 303.75) {
            cardinalDirection = "WNW";
        } else if (degrees > 303.75 && degrees <= 326.25) {
            cardinalDirection = "NW";
        } else if (degrees > 326.75 && degrees <= 348.75) {
            cardinalDirection = "NNW";
        }
        return cardinalDirection;
    }

    function appendLeadingZeroes(n){
        if(n <= 9){
            return "0" + n;
        }
        return n;
    }

    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    function formatTime(timeStamp){
        let dateTime = new Date(timeStamp * 1000);
        let year = dateTime.getFullYear();
        let month = months[dateTime.getMonth()];
        let day = dateTime.getDate();
        let hour = appendLeadingZeroes(dateTime.getHours());
        let minutes = appendLeadingZeroes(dateTime.getMinutes());
        let seconds = appendLeadingZeroes(dateTime.getSeconds());
        let formattedDateTime = month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
        return formattedDateTime;
    }

    function mostFrequent(array){
        const arrayElementsCount = array.reduce(function(total, element){
            if (!total[element]) {
                total[element] = 1;
            } else {
                total[element] = total[element] + 1;
            }
            return total;
        }, {});
        const arraySorted = Object.entries(arrayElementsCount).sort(function(a, b){
            return b[1] - a[1];
        });
        return arraySorted[0][0];
    }


    //end of util functions

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
        <div class="card col-8 col-md-3 mt-4 mx-auto px-0">
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