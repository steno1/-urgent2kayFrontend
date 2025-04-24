
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// Define types
interface RequestState {
  requestId: string | null;
  status: string;
  error: string | null;
}

// Initial state
const initialState: RequestState = {
  requestId: null,
  status: '',
  error: null,
};

// Create the request slice
const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setRequestStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setRequestId: (state, action: PayloadAction<string>) => {
      state.requestId = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});


export const { setRequestStatus, setRequestId, setError } = requestSlice.actions;


export default requestSlice.reducer;
