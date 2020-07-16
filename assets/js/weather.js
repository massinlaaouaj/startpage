function getWeather() {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Tarragona&appid=YOUR_TOKEN')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var temp = data['main']['temp'];
      var desc = data['weather'][0]['main'];
      var info = [temp,desc];
      //return info;
      switch (info[1]) {
        case "Clouds":
          document.getElementById("weather").innerHTML = "<article class='weather'><img src='http://openweathermap.org/img/wn/03d.png' alt=''><p>"+info[1]+"</p></article>";
        break;

        case "Clear":
          document.getElementById("weather").innerHTML = "<article class='weather'><img src='http://openweathermap.org/img/wn/01d.png' alt=''><p>"+info[1]+"</p></article>";
        break;

        case "Snow":
          document.getElementById("weather").innerHTML = "<article class='weather'><img src='http://openweathermap.org/img/wn/13d.png' alt=''><p>"+info[1]+"</p></article>";
        break;

        case "Rain":
          document.getElementById("weather").innerHTML = "<article class='weather'><img src='http://openweathermap.org/img/wn/09d.png' alt=''><p>"+info[1]+"</p></article>";
        break;

        case "Drizzle":
          document.getElementById("weather").innerHTML = "<article class='weather'><img src='http://openweathermap.org/img/wn/09d.png' alt=''><p>"+info[1]+"</p></article>";
        break;

        case "Thunderstorm":
          document.getElementById("weather").innerHTML = "<article class='weather'><img src='http://openweathermap.org/img/wn/11d.png' alt=''><p>"+info[1]+"</p></article>";
        break;

        default:
          document.getElementById("weather").innerHTML = "<article class='weather'><img src='http://openweathermap.org/img/wn/50d.png' alt=''><p>"+info[1]+"</p></article>";
        break;
      }
      if (info[1] == "Clouds") {
        
      }
      
    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    })
}