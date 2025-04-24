import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


interface RequestDetails {
  title: string;
  description: string;
  amount: number;
  requester: string;
  sponsor: string;
}

interface RequestStatus {
  status: string;
}

const requestApi = createApi({
  reducerPath: 'requestApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://your-api-url.com/', 
  }),
  endpoints: (builder) => ({
    createRequest: builder.mutation<{ requestId: string }, RequestDetails>({
      query: (requestDetails) => ({
        url: 'requests/create',
        method: 'POST',
        body: requestDetails,
      }),
    }),
    getRequestStatus: builder.query<RequestStatus, string>({
      query: (requestId) => ({
        url: `requests/status/${requestId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateRequestMutation,
  useGetRequestStatusQuery,
} = requestApi;

export default requestApi;
