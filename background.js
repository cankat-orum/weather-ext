fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=istanbul&units=metric&appid=${API_key}`
)
  .then((data) => data.json())
  .then((jsonData) => {
    console.log(jsonData.name);
    console.log(jsonData.main.temp);
    console.log(jsonData.main.feels_like);
    console.log(jsonData.weather[0].description);

    fetch(
      `https://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`
    )
      .then((res) => res.blob())
      .then((result) => {
        let msg = {
          city: jsonData.name,
          country: jsonData.sys.country,
          temp: Math.round(jsonData.main.temp),
          feels_like: Math.round(jsonData.main.feels_like),
          desc: jsonData.weather[0].description,
        };
        chrome.tabs.sendMessage(msg);
      });
  });
