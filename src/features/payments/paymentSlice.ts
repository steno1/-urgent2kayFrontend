
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface PaymentState {
  transactionId: string | null;
  status: string;
  error: string | null;
}


const initialState: PaymentState = {
  transactionId: null,
  status: '',
  error: null,
};

// Create the payment slice
const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setTransactionId: (state, action: PayloadAction<string>) => {
      state.transactionId = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});


export const { setPaymentStatus, setTransactionId, setError } = paymentSlice.actions;


export default paymentSlice.reducer;
