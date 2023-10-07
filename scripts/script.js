const successCallBack = (position) => {
    console.log(position);
   // setLocationInMap(position.coords.latitude,position.coords.longitude);
};
 
 const errorCallBack = (error) => {
    console.log(error);
}
 
getLocation();
 
 function getLocation(){
    navigator.geolocation.getCurrentPosition(successCallBack,errorCallBack);
}
 
 
// const locationName = $('#location');
// const feelsLike = $('#feels-like');

function searchBtnOnClicked(){
   
    const searchTxt = $("#search-city");
    var typedText = searchTxt.val();
    console.log(typedText);
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
   
   
   
    $.ajax({
        method : "GET",
        url : "http://api.weatherapi.com/v1/forecast.json?Key=566f72abab90409ebba155057231909&q="+typedText+"&days=4",
        success : (resp) => {
            console.log(resp);
            $('#location').text(resp.location.name);
            $('#current-temp').text(resp.current.temp_c);
            $('#chance-of-rain').text(resp.forecast.forecastday[0].day.daily_chance_of_rain);
            $('#temp-6').text(resp.forecast.forecastday[0].hour[6].temp_c);
            url6.src = resp.forecast.forecastday[0].hour[6].condition.icon;
            $('#temp-9').text(resp.forecast.forecastday[0].hour[9].temp_c);
            url9.src = resp.forecast.forecastday[0].hour[9].condition.icon;
            $('#temp-12').text(resp.forecast.forecastday[0].hour[12].temp_c);
            url12.src = resp.forecast.forecastday[0].hour[12].condition.icon;
            $('#temp-15').text(resp.forecast.forecastday[0].hour[15].temp_c);
            url15.src = resp.forecast.forecastday[0].hour[15].condition.icon;
            $('#temp-18').text(resp.forecast.forecastday[0].hour[18].temp_c);
            url18.src = resp.forecast.forecastday[0].hour[18].condition.icon;
            $('#temp-21').text(resp.forecast.forecastday[0].hour[21].temp_c);
            url21.src = resp.forecast.forecastday[0].hour[21].condition.icon;
            $('#temp-0').text(resp.forecast.forecastday[0].hour[0].temp_c);
            url0.src = resp.forecast.forecastday[0].hour[0].condition.icon;           

          // Days Forecast pane ----------------------------------
            $('#day1').text(weekday[new Date(resp.forecast.forecastday[0].date).getDay()]); 
            $('#day2').text(weekday[new Date(resp.forecast.forecastday[1].date).getDay()]); 
            $('#day3').text(weekday[new Date(resp.forecast.forecastday[2].date).getDay()]);          
            $('#day4').text(weekday[new Date(resp.forecast.forecastday[0].date).getDay()]); 
            $('#day5').text(weekday[new Date(resp.forecast.forecastday[1].date).getDay()]); 
            $('#day6').text(weekday[new Date(resp.forecast.forecastday[2].date).getDay()]); 
            $('#day7').text(weekday[new Date(resp.forecast.forecastday[0].date).getDay()]);     
            
            
            imgDay1.src = resp.forecast.forecastday[0].day.condition.icon;   


            $('#feels-like').text(resp.current.feelslike_c);
            $('#wind').text(resp.current.wind_kph);
            $('#humidity').text(resp.current.humidity);
            $('#uv').text(resp.current.uv);
            $('#precipitation').text(resp.current.precip_mm);
            $('#visibility').text(resp.current.vis_km);

            
           
            console.log("Latitude: " ,resp.location.lat);
            console.log("Longitude: " ,resp.location.lon);
            setLocationInMap(resp.location.lat, resp.location.lon);
        }
    });
    //retrieveTodayWeatherData(typedText);

}

function retrieveTodayWeatherData(typedText) {
    $.ajax({
        method : "GET",
        url : "http://api.weatherapi.com/v1/forecast.json?Key=566f72abab90409ebba155057231909&q="+typedText+"&days=1",
        success : (resp1) => {
            console.log(resp1);
            // $('#location').text(resp.location.name);
           
            
        }
    });

}



var map = L.map('map').setView([6.0329, 80.2168], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
const marker = L.marker([0,0]).addTo(map);

function setLocationInMap(lng,ltd) {   

marker.setLatLng([lng, ltd]).update();
map.setView([lng, ltd],15);
}
