import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import paymentReducer from '../features/payments/paymentSlice';
import requestReducer from '../features/requests/requestSlice';
import sponsorsReducer from '../features/sponsors/sponsorsSlice'; 


import authApi from '../features/auth/authApi';

import paymentApi from '../features/payments/paymentApi';
import requestApi from '../features/requests/requestApi';
import sponsorsApi from '../features/sponsors/sponsorsApi';


const store = configureStore({
  reducer: {
    auth: authReducer,
    payment: paymentReducer,
    request: requestReducer,
    sponsors: sponsorsReducer, 
    authApi: authApi.reducer,
    paymentApi: paymentApi.reducer,
    requestApi: requestApi.reducer,
    sponsorsApi: sponsorsApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(authApi.middleware)
      .concat(paymentApi.middleware)
      .concat(requestApi.middleware)
      .concat(sponsorsApi.middleware), 
  devTools: true,
});


export default store;
