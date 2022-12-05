// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const deezerApi = createApi({
  reducerPath: "deezerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.deezer.com",
  }),
  endpoints: (builder) => ({
    getUserByAccesToken: builder.query({
      query: (access) => `/user/me?access_token=${access}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserByAccesTokenQuery } = deezerApi;
