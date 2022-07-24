import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_KEY, BASE_1, BASE_2, BASE_DST } from "./apiUrls";

// Define a service using a base URL and expected endpoints
export const RapidAPI = createApi({
  reducerPath: "RapidAPI",
  baseQuery: fetchBaseQuery({
    url: BASE_URL,
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    },
  }),
  endpoints: (builder) => ({
    getListOfGames: builder.query({
      query: () => `/games`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListOfGamesQuery } = RapidAPI;
