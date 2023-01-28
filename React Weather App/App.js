import React, { useEffect } from "react";
import "./App.css";

const api = {
  key: "62474199c43da36f9352816a8664003e",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [city, setcity] = React.useState("");
  const [status, setstatus] = React.useState("yükleniyor...");
  const [weatherObject, setweatherObject] = React.useState({});

  useEffect(() => {
    fetch(`${api.base}weather?q=Bayburt&appid=${api.key}&units=metric&lang=tr`)
      .then(res => res.json())
      .then(data => setweatherObject(data));
  }, []);

  const search = e => {
    // console.log(e.key);
    if (e.key === "Enter") {
      setstatus("Yükleniyor...");
      fetch(
        `${api.base}weather?q=${city}&appid=${api.key}&units=metric&lang=tr`
      )
        .then(res => res.json())
        .then(data => {
          setweatherObject(data);
          setcity("");
        })
        .catch(
          setTimeout(() => {
            setstatus("Bulunamadı!");
          }, 3000)
        );
    }
  };
  // console.log(weatherObject);

  return (
    <div className="app dark">
      <h2>Hava Durumu</h2>
      <input
        placeholder="Şehir giriniz?"
        type="text"
        onChange={e => setcity(e.target.value)}
        value={city}
        onKeyPress={search}
      />
      {typeof weatherObject.name != "undefined" ? (
        <div>
          <h2>{`${weatherObject.name}, ${weatherObject.sys.country}`}</h2>
          <h1>{`${Math.round(weatherObject.main.temp)}°C`}</h1>
          <h2>{weatherObject.weather[0].description}</h2>
          <h3>
            {`Hissedilen: ${Math.round(weatherObject.main.feels_like)}°C`}
          </h3>
          <h3>
            {Math.round(weatherObject.main.temp_min)}°C/
            {Math.round(weatherObject.main.temp_max)}°C
          </h3>
          <h3>{`Bulut: %${weatherObject.clouds.all}`}</h3>
          <h3>{`Nem: %${weatherObject.main.humidity}`}</h3>
          <h3>
            {weatherObject.main.sea_level &&
              `Deniz Seviyesi: ${weatherObject.main.sea_level}`}
          </h3>
          <h3>
            {weatherObject.main.grnd_level &&
              `Yer Seviyesi: ${weatherObject.main.grnd_level}`}
          </h3>
        </div>
      ) : (
        <h2>{status}</h2>
      )}
      Soner-27.01.2023
      {/* <h5>{JSON.stringify(weatherObject)}</h5> */}
    </div>
  );
}

export default App;
