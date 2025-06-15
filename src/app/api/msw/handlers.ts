import { http, HttpResponse } from "msw";
import type { Weather } from "../../../types/weather";

export const handlers = [
  http.get("https://test.server.com/api/weather", () => {
    return HttpResponse.json([
      {
        id: "1",
        date: "15.06.2025, 12:00",
        temperature: 25.3,
        weather: "sunny",
        author: "Vlad Merenkov",
        comment: "It's really hot today",
      },
      {
        id: "2",
        date: "15.06.2025, 15:00",
        temperature: 21.8,
        weather: "cloudy",
        author: "Vlad Merenkov",
        comment: "I see some clouds",
      },
    ] as Weather[]);
  }),

  //   http.post("https://test.server.com/api/weather", async ({ request }) => {
  //     const newEntry = await request.json();
  //     console.log("Received mock POST:", newEntry);
  //     return HttpResponse.json({ success: true });
  //   }),
];
