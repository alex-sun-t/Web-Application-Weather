

var weather = [];
fetch("https://api.weatherbit.io/v2.0/forecast/daily?&city=Rovno,Ukraine,NC&key=1357123afac6402ebff21e47542235f0&days=7")
.then((response) => response.json())
.then((json) => {weather = json.data 
console.log(weather);

document.getElementById("im-g").innerHTML= `
<img width="165px" height="145px" src="image/wth/${weather[0].weather.icon}.png">
`;
document.getElementsByClassName("ToD-temp")[0].innerHTML = `${weather[0].temp}°C`;
document.getElementById("press").innerHTML =`${weather[0].pres}`;
document.getElementById("humid").innerHTML =`${weather[0].rh}%`;
document.getElementById("wind").innerHTML =`${weather[0].wind_spd}m/s`;
document.getElementById("precip").innerHTML =`${weather[0].pop}%`;
var days = [] = document.getElementsByClassName("temp-7-days");
for(var i = 0;i < weather.length;i++)
{
    document.getElementById("wk").innerHTML += `
            <div class="days" id="${i}">
            <h3 class="date-week">${weather[i].valid_date}</h3>
            <h2 class="temp-7-days col-lg-2 col-md-6 col-sm-8 col-xs-12">${weather[i].temp}°C</h2>
            <img id="imge" class="imgg col-lg-12 col-md-12 col-sm-12 col-xs-12" width="70" height="80" src="image/wth/${weather[i].weather.icon}.png">
            <div class="min-max">
                <p>min<br><b class="temp-min">${weather[i].min_temp}°</b></p>
                <p>max<br><b class="temp-max">${weather[i].max_temp}°</b></p>
            </div>
        </div>`;
}
});

document.getElementById("select").addEventListener('click',function(){

    var city = document.getElementById("search").value;
    var select_country = document.getElementById("country").value;
    
    var weather = [];
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&city=${city},${select_country},NC&key=1357123afac6402ebff21e47542235f0&days=7`)
    .then((response) => response.json())
    .then((json) => {weather = json.data 
        console.log(weather);
        
        document.getElementsByClassName("ToD-temp")[0].innerHTML = `${weather[0].temp}°C`;
        document.getElementById("coun-city").innerHTML = `${select_country}/${city}`;
        var days = [] = document.getElementsByClassName("temp-7-days");
        for(var i = 0;i < days.length;i++)
        {
            days[i].innerHTML = `${weather[i].temp}°C`;
            document.getElementsByClassName("date-week")[i].innerHTML = `${weather[i].valid_date}`;
            document.getElementsByClassName("temp-min")[i].innerHTML = `${weather[i].min_temp}°`;
            document.getElementsByClassName("temp-max")[i].innerHTML = `${weather[i].max_temp}°`;
            document.getElementById("press").innerHTML =`${weather[0].pres}`;
            document.getElementById("humid").innerHTML =`${weather[0].rh}%`;
            document.getElementById("wind").innerHTML =`${weather[0].wind_spd}m/s`;
            document.getElementById("precip").innerHTML =`${weather[0].pop}%`;
            document.getElementById("imge").src = `image/wth/${weather[i].weather.icon}.png`;
        }
        var img_ToDay = document.getElementsByClassName("imgg")[0];
        document.getElementById("im-g").innerHTML= `
        <img width="165px" height="145px" src="${img_ToDay.src}">`;
    });
});

var darkThm = document.getElementById("dark-thm");
darkThm.addEventListener('click',function(id) {
    
    if(darkThm.checked)
    {
        $('.h-bar').css({'border':'1px solid black','background-color': 'rgba(255, 255, 255, 0.356)'});
        $('.today-block span').css({'color':'white'});
        $('.today-block').css({'color':'white','border':'1px solid black'});
        $('.min-max b').css({'color':'white'});
        $('.temp-7-days').css({'color':'white'});
        $('.dark-theme').css({'color':'white'});
        $('.days').css({'border':'1px solid black'});
        $('.back-g').css({'background-image':'url("https://i.pinimg.com/originals/80/a9/75/80a9750d105c49b56beaaa84a6ff2667.jpg")'});
        $("i").addClass("fa-sun").removeClass("fa-moon");  
    }
    else
    {
        $('.h-bar').css({'border':'1px solid black','background-color': 'rgba(0, 0, 0, 0.356)'});
        $('.today-block span').css({'color':'black'});
        $('.today-block').css({'color':'black','border':'1px solid black'});
        $('.min-max b').css({'color':'black'});
        $('.temp-7-days').css({'color':'black'});
        $('.dark-theme').css({'color':'black'});
        $('.days').css({'border':'1px solid black'});
        $('.back-g').css({'background-image':'url("https://www.xmple.com/wallpaper/white-blue-gradient-linear-1920x1080-c2-ffffff-00bfff-a-270-f-14.svg")'});
        $("i").addClass("fa-moon").removeClass("fa-sun");   
    }
});
