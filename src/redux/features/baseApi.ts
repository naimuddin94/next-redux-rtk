import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "/country",
    }),
  }),
});

export const { useGetCountriesQuery } = baseApi;

export default baseApi;
