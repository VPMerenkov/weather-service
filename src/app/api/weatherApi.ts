import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Weather } from "../../types/weather";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://test.server.com/api/" }),
  tagTypes: ["Weather"],
  endpoints: (builder) => ({
    getWeather: builder.query<Weather[], void>({
      query: () => "weather",
      providesTags: ["Weather"],
    }),
    addWeather: builder.mutation<Weather, Omit<Weather, "id">>({
      query: (entry) => ({
        url: "weather",
        method: "POST",
        body: entry,
      }),
      invalidatesTags: ["Weather"],
    }),
  }),
});

export const { useAddWeatherMutation, useGetWeatherQuery } = weatherApi;
