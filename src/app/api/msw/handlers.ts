import { http, HttpResponse } from "msw";
import type { Weather } from "../../../types/weather";

const weatherArray: Weather[] = [
  {
    id: "1",
    date: "2025-06-15T12:00:05.960Z",
    temperature: "25.3",
    weather: "sunny",
    author: "Vlad Merenkov",
    comment: "It's really hot today",
  },
  {
    id: "2",
    date: "2025-06-15T15:23:05.960Z",
    temperature: "21.8",
    weather: "cloudy",
    author: "Vasily Ivanov",
    comment: "I see some clouds",
  },
  {
    id: "3",
    date: "2025-06-15T20:00:05.960Z",
    temperature: "20.1",
    weather: "overcast",
    author: "Vlad Merenkov",
    comment: "It looks like the apocalypse",
  },
];

export const handlers = [
  http.get("https://test.server.com/api/weather", () => {
    return HttpResponse.json(weatherArray);
  }),

  http.post("https://test.server.com/api/weather", async ({ request }) => {
    const newEntry = await request.json();

    weatherArray.push(newEntry as Weather);

    return HttpResponse.json({ success: true });
  }),
];
