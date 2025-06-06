import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { setLoading } = filesSlice.actions;
export default filesSlice.reducer;
