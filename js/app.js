//get the current location or default to India Gate
var mylocation = {lat: 28.6129, lng: 77.2273}
    
var myApp = angular.module("myApp",  []);
    myApp.directive("myMaps", function(){
    return{
        restrict:'E',
        template:'<div></div>',
        replace:true,
        link: function(scope, element, attrs){
get_geo_location()
       }
    };
    });
myApp.factory("UserService", function() {
        return {
                getLocation: function() {
                          return get_geo_location;
                      }
                };
});

function get_geo_location(){
            if (navigator.geolocation)
                navigator.geolocation.getCurrentPosition(showPosition);
            else
                alert("Geolocation is not supported by this browser");
}
function showPosition(position)
{
    mylocation.lat = position.coords.latitude;
    mylocation.lng = position.coords.longitude;
             var myLatLng = new google.maps.LatLng(mylocation.lat, mylocation.lng);
            var mapOptions = {
                center: myLatLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hey, You are here !!!'
            });
}
