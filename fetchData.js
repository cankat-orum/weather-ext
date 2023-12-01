const API_key = "78e68c42208ce805135513c68d574e91";

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=istanbul&units=metric&appid=78e68c42208ce805135513c68d574e91"
)
  .then((data) => data.json())
  .then((jsonData) => {
    console.log(jsonData.name);
    console.log(jsonData.main.temp);
    console.log(jsonData.main.feels_like);
    console.log(jsonData.weather[0].description);

    document.getElementById("text_location").innerHTML = jsonData.name;
    document.getElementById("text_location_country").innerHTML =
      jsonData.sys.country;
    document.getElementById("text_temp").innerHTML = jsonData.main.temp;
    document.getElementById("text_feelslike").innerHTML =
      jsonData.main.feels_like;
    document.getElementById("text_desc").innerHTML =
      jsonData.weather[0].description;
  });
