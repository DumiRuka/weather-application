const successCallBack = (position) => {
    console.log(position);
    // setLocationInMap(position.coords.latitude,position.coords.longitude);
};

const errorCallBack = (error) => {
    console.log(error);
}

getLocation();

function getLocation() {
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
}


const searchTxt = $("#search-city");

function searchBtnOnClicked() {
    var typedText = searchTxt.val();
    console.log(typedText);
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];



    $.ajax({
        method: "GET",
        url: "https://api.weatherapi.com/v1/forecast.json?Key=566f72abab90409ebba155057231909&q=" + typedText + "&days=4",
        success: (resp) => {
            console.log(resp);
            $('#location').text(resp.location.name);
            $('#current-temp').text(Math.round(resp.current.temp_c));
            $('#chance-of-rain').text(resp.forecast.forecastday[0].day.daily_chance_of_rain);
            $('#temp-6').text(Math.round(resp.forecast.forecastday[0].hour[6].temp_c));
            url6.src = resp.forecast.forecastday[0].hour[6].condition.icon;
            $('#temp-9').text(Math.round(resp.forecast.forecastday[0].hour[9].temp_c));
            url9.src = resp.forecast.forecastday[0].hour[9].condition.icon;
            $('#temp-12').text(Math.round(resp.forecast.forecastday[0].hour[12].temp_c));
            url12.src = resp.forecast.forecastday[0].hour[12].condition.icon;
            $('#temp-15').text(Math.round(resp.forecast.forecastday[0].hour[15].temp_c));
            url15.src = resp.forecast.forecastday[0].hour[15].condition.icon;
            $('#temp-18').text(Math.round(resp.forecast.forecastday[0].hour[18].temp_c));
            url18.src = resp.forecast.forecastday[0].hour[18].condition.icon;
            $('#temp-21').text(Math.round(resp.forecast.forecastday[0].hour[21].temp_c));
            url21.src = resp.forecast.forecastday[0].hour[21].condition.icon;
            $('#temp-0').text(Math.round(resp.forecast.forecastday[0].hour[0].temp_c));
            url0.src = resp.forecast.forecastday[0].hour[0].condition.icon;

            if (resp.current.condition.code === 1003) {
                imgmain.src = "img/PartCloud-1003.png";
            } else if (resp.current.condition.code === 1006 || resp.current.condition.code === 1009) {
                imgmain.src = "img/Cloudy-1006.png";
            } else if (resp.current.condition.code === 1000) {
                imgmain.src = "img/Sunny-1000.png";
            } else if (resp.current.condition.code === 1087) {
                imgmain.src = "img/thunder-1087.png";
            } else if (resp.current.condition.code === 1063 || resp.current.condition.code === 1066) {
                imgmain.src = "img/patchyrain-1063&1066.png";
            } else if (resp.current.condition.code > 1170 || resp.current.condition.code < 1201) {
                imgmain.src = "img/Rain1170-1201.png";
            } else if (resp.current.condition.code > 1272 || resp.current.condition.code < 1283) {
                imgmain.src = "img/Thunder-rain 1273-1282.png";
            } else {
                imgmain.src = "img/Veryhot.png";
            }


            // 7 Days Forecast pane ----------------------------------
            // Day of the week for the forecast
            $('#day1').text(weekday[new Date(resp.forecast.forecastday[0].date).getDay()]);
            $('#day2').text(weekday[new Date(resp.forecast.forecastday[1].date).getDay()]);
            $('#day3').text(weekday[new Date(resp.forecast.forecastday[2].date).getDay()]);
            $('#day4').text(weekday[new Date(resp.forecast.forecastday[0].date).getDay()]);
            $('#day5').text(weekday[new Date(resp.forecast.forecastday[1].date).getDay()]);
            $('#day6').text(weekday[new Date(resp.forecast.forecastday[2].date).getDay()]);
            $('#day7').text(weekday[new Date(resp.forecast.forecastday[0].date).getDay()]);

            //-- Weather Icon from the API for 7Days ------------------------------
            imgDay1.src = resp.forecast.forecastday[0].day.condition.icon;
            imgDay2.src = resp.forecast.forecastday[1].day.condition.icon;
            imgDay3.src = resp.forecast.forecastday[2].day.condition.icon;
            imgDay4.src = resp.forecast.forecastday[0].day.condition.icon;
            imgDay5.src = resp.forecast.forecastday[1].day.condition.icon;
            imgDay6.src = resp.forecast.forecastday[2].day.condition.icon;
            imgDay7.src = resp.forecast.forecastday[0].day.condition.icon;

            //-- Weather condition details for 7Days ----------------------
            $('#txt-day1').text(resp.forecast.forecastday[0].day.condition.text);
            $('#txt-day2').text(resp.forecast.forecastday[1].day.condition.text);
            $('#txt-day3').text(resp.forecast.forecastday[2].day.condition.text);
            $('#txt-day4').text(resp.forecast.forecastday[0].day.condition.text);
            $('#txt-day5').text(resp.forecast.forecastday[1].day.condition.text);
            $('#txt-day6').text(resp.forecast.forecastday[2].day.condition.text);
            $('#txt-day7').text(resp.forecast.forecastday[0].day.condition.text);

            // Maximum & Minimum Temperature Update ---------------------------
            $('#max-temp-day1').text(Math.round(resp.forecast.forecastday[0].day.maxtemp_c));
            $('#min-temp-day1').text(Math.round(resp.forecast.forecastday[0].day.mintemp_c));
            $('#max-temp-day2').text(Math.round(resp.forecast.forecastday[1].day.maxtemp_c));
            $('#min-temp-day2').text(Math.round(resp.forecast.forecastday[1].day.mintemp_c));
            $('#max-temp-day3').text(Math.round(resp.forecast.forecastday[2].day.maxtemp_c));
            $('#min-temp-day3').text(Math.round(resp.forecast.forecastday[2].day.mintemp_c));
            $('#max-temp-day4').text(Math.round(resp.forecast.forecastday[0].day.maxtemp_c));
            $('#min-temp-day4').text(Math.round(resp.forecast.forecastday[0].day.mintemp_c));
            $('#max-temp-day5').text(Math.round(resp.forecast.forecastday[1].day.maxtemp_c));
            $('#min-temp-day5').text(Math.round(resp.forecast.forecastday[1].day.mintemp_c));
            $('#max-temp-day6').text(Math.round(resp.forecast.forecastday[2].day.maxtemp_c));
            $('#min-temp-day6').text(Math.round(resp.forecast.forecastday[2].day.mintemp_c));
            $('#max-temp-day7').text(Math.round(resp.forecast.forecastday[0].day.maxtemp_c));
            $('#min-temp-day7').text(Math.round(resp.forecast.forecastday[0].day.mintemp_c));

            //Other weather data for the day-----------------------------
            $('#feels-like').text(resp.current.feelslike_c);
            $('#wind').text(resp.current.wind_kph);
            $('#humidity').text(resp.current.humidity);
            $('#uv').text(resp.current.uv);
            $('#precipitation').text(resp.current.precip_mm);
            $('#visibility').text(resp.current.vis_km);



            console.log("Latitude: ", resp.location.lat);
            console.log("Longitude: ", resp.location.lon);
            setLocationInMap(resp.location.lat, resp.location.lon);
        }
    });

}
// Dark Theme Function with toggle Button-----------------------------------
let btn = document.getElementById("btnDark");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");

function toggleBtnOnClick() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        btnIcon.src = "img/sun-icon.png";
        btnText.innerHTML = "Light";
        document.getElementById('location').setAttribute('style', 'color: #fff');
        document.getElementById('txtRainField').setAttribute('style', 'color: #fff');
        document.getElementById('txtCurrentTem').setAttribute('style', 'color: #fff');
        document.getElementById('txtUnits').setAttribute('style', 'color: #fff');
        document.getElementById('txtSupportField').setAttribute('style', 'color: #fff');
        document.getElementById('lineBottom').src = "img/Line 22-White.png";
    } else {
        btnIcon.src = "img/moon.png";
        btnText.innerHTML = "Dark";
        document.getElementById('location').setAttribute('style', 'color: #000000');
        document.getElementById('txtRainField').setAttribute('style', 'color: #000000');
        document.getElementById('txtCurrentTem').setAttribute('style', 'color: #000000');
        document.getElementById('txtUnits').setAttribute('style', 'color: #000000');
        document.getElementById('txtSupportField').setAttribute('style', 'color: #000000');
        document.getElementById('lineBottom').src = "img/line-22.png";
    }
}

let btnFavorite = document.getElementById("btnFavorite");
let imgFav = document.getElementById("imgStar");

btnFavorite.onclick = function () {
    var typedText = searchTxt.val();
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    if (btnFavorite.value == "NO") {
        btnFavorite.value = "YES";
        imgFav.src = "img/Star-2-2 Orange.png";
        $.ajax({
            method: "GET",
            url: "https://api.weatherapi.com/v1/forecast.json?Key=566f72abab90409ebba155057231909&q=" + typedText + "&days=4",
            success: (resp) => {
                console.log(resp);
                $('#cityfav1').text(resp.location.name);
                $('#tempfav1').text(Math.round(resp.current.temp_c));
                imgfav1.src = resp.current.condition.icon;
                $('#timefav1').text(new Date(resp.current.last_updated).getHours() + ": " +
                    new Date(resp.current.last_updated).getMinutes());
                $('#favcity').text(resp.location.name);
                $('#tempfavcity').text(Math.round(resp.current.temp_c));
                imgfavcity.src = resp.current.condition.icon;
                $('#rainfavcity').text(resp.forecast.forecastday[0].day.daily_chance_of_rain);
                $('#tempfavcity6').text(Math.round(resp.forecast.forecastday[0].hour[6].temp_c));
                imgfavcity6.src = resp.forecast.forecastday[0].hour[6].condition.icon;
                $('#tempfavcity9').text(Math.round(resp.forecast.forecastday[0].hour[9].temp_c));
                imgfavcity9.src = resp.forecast.forecastday[0].hour[9].condition.icon;
                $('#tempfavcity12').text(Math.round(resp.forecast.forecastday[0].hour[12].temp_c));
                imgfavcity12.src = resp.forecast.forecastday[0].hour[12].condition.icon;

                //$('#day1favcity').text(weekday[new Date(resp.forecast.forecastday[0].date).getDay()]);
                $('#day2favcity').text(weekday[new Date(resp.forecast.forecastday[1].date).getDay()]);
                $('#day3favcity').text(weekday[new Date(resp.forecast.forecastday[2].date).getDay()]);

                imgday1favcity.src = resp.forecast.forecastday[0].day.condition.icon;
                imgday2favcity.src = resp.forecast.forecastday[1].day.condition.icon;
                imgday3favcity.src = resp.forecast.forecastday[2].day.condition.icon;

                $('#txtday1favcity').text(resp.forecast.forecastday[0].day.condition.text);
                $('#txtday2favcity').text(resp.forecast.forecastday[1].day.condition.text);
                $('#txtday3favcity').text(resp.forecast.forecastday[2].day.condition.text);

                $('#maxtempday1favcity').text(Math.round(resp.forecast.forecastday[0].day.maxtemp_c));
                $('#mintempday1favcity').text(Math.round(resp.forecast.forecastday[0].day.mintemp_c));
                $('#maxtempday2favcity').text(Math.round(resp.forecast.forecastday[1].day.maxtemp_c));
                $('#mintempday2favcity').text(Math.round(resp.forecast.forecastday[1].day.mintemp_c));
                $('#maxtempday3favcity').text(Math.round(resp.forecast.forecastday[2].day.maxtemp_c));
                $('#mintempday3favcity').text(Math.round(resp.forecast.forecastday[2].day.mintemp_c));

            }
        });

    } else if (btnFavorite.value == "YES") {
        btnFavorite.value = "NO";
        imgFav.src = "img/star-1-1.png";
    }



}





var map = L.map('map').setView([6.0329, 80.2168], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
const marker = L.marker([0, 0]).addTo(map);

function setLocationInMap(lng, ltd) {

    marker.setLatLng([lng, ltd]).update();
    map.setView([lng, ltd], 15);
}
