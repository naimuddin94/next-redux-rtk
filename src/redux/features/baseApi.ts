import { ICountry } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";

const baseApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["countries"],
  endpoints: (builder) => ({
    getCountries: builder.query<ICountry[], string>({
      query: () => "/country",
      providesTags: ["countries"],
    }),
    removeCountry: builder.mutation({
      query: (id) => ({
        url: `/country/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["countries"],
    }),

    addCountry: builder.mutation({
      query: (country) => ({
        url: "/country/create",
        method: "POST",
        body: country,
      }),
      invalidatesTags: ["countries"],
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useRemoveCountryMutation,
  useAddCountryMutation,
} = baseApi;

export default baseApi;
