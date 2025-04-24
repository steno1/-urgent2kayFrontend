import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Types
interface Credentials {
  email: string;
  password: string;
}

interface UserData {
  email: string;
  password: string;
  name: string;
}

interface Token {
  token: string;
}

// Create the API slice manually
const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://your-api-url.com/', // Update with your real API URL
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<{ token: string }, Credentials>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    registerUser: builder.mutation<{ message: string }, UserData>({
      query: (userData) => ({
        url: 'auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    verifyToken: builder.query<{ valid: boolean }, Token>({
      query: (token) => ({
        url: 'auth/verify-token',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      }),
    }),
  }),
});

// Export the hooks
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useVerifyTokenQuery,
} = authApi;

export default authApi;
