

<!-- Mapbox JS -->

<!-- Custom JS -->
// mapboxgl.accessToken = mapboxToken;

// mapboxgl.accessToken = YOUR_TOKEN_HERE;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 10,
//     center: [-98.4916, 29.4252]
// });
//
// // the  geocode method from mapbox-geocoder-utils.js
// geocode("600 Navarro St #350, San Antonio, TX 78205", YOUR_TOKEN_HERE).then(function(result) {
//     console.log(result);
//     map.setCenter(result);
//     map.setZoom(20);
// });

mapboxgl.accessToken = mapboxToken;


var mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252],
    pitch: 60
}

var map = new mapboxgl.Map(mapOptions);

// var map = new mapboxgl.Map(mapOptions)

var restaurantArray = [
    {
        name: "Chachos",
        address: "6757 Poss Rd, San Antonio, TX 78238",
        info: "Great margs!"
    },
    {
        name: "Boudro's",
        address: "421 E Commerce St, San Antonio, TX 78205",
        info: "Great steaks!"
    },
    {
        name: "Chick-fil-a",
        address: "18310 Blanco Rd",
        info: "My pleasure!"
    },
    {
        name: "Fralos",
        address: "23651 W Interstate 10 Frontage Rd, San Antonio, TX 78257",
        info: "My mom likes this place!"
    }]

restaurantArray.forEach(function (restaurant) {
    console.log(restaurant);
    geocode(restaurant.address, mapboxToken).then(function(coordinates) {
        var popup = new mapboxgl.Popup()
            .setHTML(restaurant.name + "<br>" + restaurant.address + "<br>" + restaurant.info);
        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(map);
    });
});

document.getElementById('fly').addEventListener('click', function () {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
    map.flyTo({
        center: [
            -74.5 + (Math.random() - 0.5) * 10,
            40 + (Math.random() - 0.5) * 10
        ],
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});


// var chachos = new mapboxgl.Marker()
//     .setLngLat([-98.629260, 29.527270])
//     .addTo(map);
//
// var chachosPopup = new mapboxgl.Popup()
//     .setHTML("<p>These margs are great!</p>")
//     .addTo(map)
//
// chachos.setPopup(chachosPopup)
// // --------------------------
//
// var boudros = new mapboxgl.Marker()
//     .setLngLat([-98.4883926, 29.4241267])
//     .addTo(map);
//
// var boudrosPopup = new mapboxgl.Popup()
//     .setHTML("<p>Great steaks!</p>")
//     .addTo(map);
//
// boudros.setPopup(boudrosPopup)
// // --------------------------
//
// var chickfila = new mapboxgl.Marker()
//     .setLngLat([-98.507823, 29.6106019])
//     .addTo(map);
//
// var chickfilaPopup = new mapboxgl.Popup()
//     .setHTML("<p>My pleasure!</p>")
//     .addTo(map);
//
// chickfila.setPopup(chickfilaPopup)
// // --------------------------
//
// var fralos = new mapboxgl.Marker()
//     .setLngLat([-98.62777805652178, 29.6618530270634])
//     .addTo(map);
//
// var fralosPopup = new mapboxgl.Popup()
//     .setHTML("<p>My mom likes this place!</p>")
//     .addTo(map);
//
// fralos.setPopup(fralosPopup)
// // --------------------------

// var el = document.createElement('div');
// el.id = 'marker';







