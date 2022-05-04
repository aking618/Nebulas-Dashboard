export interface Weather {
  location: string;
  temperature: number;
  weather: string;
  weather_icon_url: string;
  wind_speed: number;
  wind_direction: string;
  humidity: number;
  precipitation: number;
}

export const WeatherConvert = {
  toWeather(json: any): Weather {
    return {
      location: `${json.location.name}, ${json.location.region}`,
      temperature: json.current.temp_f,
      weather: json.current.condition.text,
      weather_icon_url: json.current.condition.icon,
      wind_speed: json.current.wind_mph,
      wind_direction: json.current.wind_dir,
      humidity: json.current.humidity,
      precipitation: json.current.precip_in,
    };
  },
};
