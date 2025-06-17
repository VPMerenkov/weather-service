export type WeatherVariant = "sunny" | "cloudy" | "overcast";

export interface Weather {
  id: string;
  date: string;
  temperature: string;
  weather: WeatherVariant;
  author: string;
  comment: string;
}
