import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Types
interface PaymentDetails {
  amount: number;
  method: string;
  recipient: string;
  paymentMethod: string;
}

interface PaymentStatus {
  status: string;
}

const paymentApi = createApi({
  reducerPath: 'paymentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://your-api-url.com/', // Update with your real API URL
  }),
  endpoints: (builder) => ({
    createPayment: builder.mutation<{ transactionId: string }, PaymentDetails>({
      query: (paymentDetails) => ({
        url: 'payments/create',
        method: 'POST',
        body: paymentDetails,
      }),
    }),
    getPaymentStatus: builder.query<PaymentStatus, string>({
      query: (transactionId) => ({
        url: `payments/status/${transactionId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreatePaymentMutation,
  useGetPaymentStatusQuery,
} = paymentApi;

export default paymentApi;
