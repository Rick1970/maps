// var apiKey ="AIzaSyCJxNyV0FOTUFGQiRMErgGOFbmbOm64fhs";

var Map=require("./../js/maps.js").mapsModule;



function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {

    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  }



  $(document).ready(function(){
    initMap();
    console.log("APP.JS WORKS");

    $("#input-form").click(function(){
      var city = ('#location').val();

    });

    $("#time").text(moment());

    // $(document).ready(function(){
    // });




    function update(){
      $("#clock").html(moment().format("D. MMMM YYYY H:mm:ss"));
    }
    setInterval(update, 1000);


  });
