
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the types for the API calls
interface SponsorDetails {
  name: string;
  email: string;
  amount: number;
}

interface SponsorResponse {
  message: string;
}

const sponsorsApi = createApi({
  reducerPath: 'sponsorsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://your-api-url.com/', 
  }),
  endpoints: (builder) => ({
    addSponsor: builder.mutation<SponsorResponse, SponsorDetails>({
      query: (sponsorDetails) => ({
        url: 'sponsors/add',
        method: 'POST',
        body: sponsorDetails,
      }),
    }),
    getSponsorStatus: builder.query<SponsorResponse, string>({
      query: (sponsorId) => ({
        url: `sponsors/status/${sponsorId}`,
        method: 'GET',
      }),
    }),
  }),
});


export const { useAddSponsorMutation, useGetSponsorStatusQuery } = sponsorsApi;
export default sponsorsApi;
