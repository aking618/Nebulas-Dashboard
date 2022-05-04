import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Weather, WeatherConvert } from "../../models/Weather";

const DateTimeWeather = () => {
  let [time, setTime] = useState<string>("");
  const [weather, setWeather] = useState<Weather | null>(null);

  const updateTime = () => {
    var time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(updateTime, 1000);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=49f3acac84db47dfa3e04948220405&q=Oklahoma City&aqi=no"
      );
      const data = await response.json();
      setWeather(WeatherConvert.toWeather(data));
    };
    fetchData();
  }, []);

  return (
    <Grid container direction="row" spacing={2} style={{ margin: "0 auto" }}>
      <Grid item xs={4}>
        <Typography
          variant="h6"
          style={{ fontFamily: "JetBrains Mono" }}
          align="center"
        >
          {new Date().toLocaleDateString()}
        </Typography>
        <Typography
          variant="h6"
          style={{ fontFamily: "JetBrains Mono" }}
          align="center"
        >
          {time}
        </Typography>
      </Grid>
      {weather && (
        <Grid item xs={2} style={{ textAlign: "center" }}>
          <img src={weather.weather_icon_url} alt={weather.weather} />
        </Grid>
      )}
      {weather && (
        <Grid container xs={6} direction="row">
          <Grid item xs={12}>
            <Typography
              variant="body1"
              style={{ fontFamily: "JetBrains Mono" }}
              align="center"
            >
              {weather.location}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="body2"
              style={{ fontFamily: "JetBrains Mono" }}
              align="center"
            >
              {weather.weather} {weather.temperature}°F
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="body2"
              style={{ fontFamily: "JetBrains Mono" }}
              align="center"
            >
              Wind: {weather.wind_speed}mph {weather.wind_direction}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="body2"
              style={{ fontFamily: "JetBrains Mono" }}
              align="center"
            >
              Humidity: {weather.humidity}%
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="body2"
              style={{ fontFamily: "JetBrains Mono" }}
              align="center"
            >
              Precipitation: {weather.precipitation}in
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default DateTimeWeather;
