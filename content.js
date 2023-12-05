var button = document.createElement("Button");
button.innerHTML = "Open Popup";
button.style = "top:0;right:0;position:fixed;z-index: 9999";
document.body.appendChild(button);

function Popup() {
  var myDialog = document.createElement("dialog");
  document.body.appendChild(myDialog);
  var button = document.createElement("Button");
  button.innerHTML = "X";
  button.addEventListener("click", () => {
    myDialog.close();
  });
  myDialog.appendChild(button);
  const API_key = "78e68c42208ce805135513c68d574e91";

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
          var text = document.createTextNode(
            `City: ${jsonData.name}
            Country: ${jsonData.sys.country}
            Temp: ${Math.round(jsonData.main.temp)}
            Feels Like: ${Math.round(jsonData.main.feels_like)}
            ${jsonData.weather[0].description}`
          );
          myDialog.appendChild(text);
          myDialog.showModal();
        });
    });
}

button.addEventListener("click", Popup);
