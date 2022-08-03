import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, BASE_RAPID_API_KEY, BASE_RAWG_API_KEY } from "./apiUrls";

// Define a service using a base URL and expected endpoints
export const RapidAPI = createApi({
  reducerPath: "RapidAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getListOfGames: builder.query({
      query: () => ({
        url: `games?key=${BASE_RAWG_API_KEY}`,
        method: "GET",
        headers: {
          "X-RapidAPI-Key": `${BASE_RAPID_API_KEY}`,
          "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListOfGamesQuery } = RapidAPI;
