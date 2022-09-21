// api.openweathermap.org/data/2.5/weather?q=Patna&units=metric&appid=c59e2096f8edda9fed5aa151dfe34781

let weather = {
    apikey: "c59e2096f8edda9fed5aa151dfe34781",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    }, 
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " Km/hr";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".Search-Bar").value);
    }
};

document.querySelector(".Search-Button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".Search-Bar").addEventListener("keyup", function(event) {
    if(event.key=="Enter") {
        weather.search();
    }
})