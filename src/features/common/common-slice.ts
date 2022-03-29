import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface commonState{
    loading : boolean,
    error : string,
    message : string
}


const initialState : commonState = {
  loading: false,
  error: null,
  message: null,
};

const commonSlice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const {setLoading , setError , setMessage} = commonSlice.actions;

export default commonSlice.reducer;
