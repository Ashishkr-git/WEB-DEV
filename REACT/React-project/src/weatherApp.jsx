import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [getWeatherInfo, setWeatherInfo] = useState({
    city: "sampleCity",
    temperature: "sampleTemp",
    feelslike: "sampleFeelslike",
    description: "sampleDescription",
    windSpeed: "sampleWindSpeed",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={getWeatherInfo} />
    </div>
  );
}
