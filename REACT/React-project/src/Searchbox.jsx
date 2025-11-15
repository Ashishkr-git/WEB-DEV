import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Searchbox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [inputValue, setInputValue] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "YOUR_API_KEY";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${inputValue}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();

    let results = {
      city: jsonResponse.name,
      temperature: jsonResponse.main.temp,
      feelslike: jsonResponse.main.feels_like,
      description: jsonResponse.weather[0].description,
      windSpeed: jsonResponse.wind.speed,
    };
    console.log(results);
    return results;
  };

  let handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputValue);
    setInputValue("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="inputField"
          label="City Name"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
        />
        <br />
        <Button id="submitButton" variant="contained" type="submit">
          search
        </Button>
      </form>
    </div>
  );
}
