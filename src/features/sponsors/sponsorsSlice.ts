

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define types
interface SponsorsState {
  sponsorId: string | null;
  status: string;
  error: string | null;
}

// Initial state
const initialState: SponsorsState = {
  sponsorId: null,
  status: '',
  error: null,
};

// Create the sponsors slice
const sponsorsSlice = createSlice({
  name: 'sponsors',
  initialState,
  reducers: {
    setSponsorStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setSponsorId: (state, action: PayloadAction<string>) => {
      state.sponsorId = action.payload;
    },
    setSponsorError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});


export const { setSponsorStatus, setSponsorId, setSponsorError } = sponsorsSlice.actions;


export default sponsorsSlice.reducer;
