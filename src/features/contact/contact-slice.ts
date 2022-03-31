import { createSlice } from "@reduxjs/toolkit";
import { sendMessage } from "./actions";

export interface MessageTpye {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

interface InitialState {
  loading: boolean;
}
const initialState = {
  loading: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(sendMessage.pending ,(state, { payload }) => {
      state.loading = true;
    } )
    .addCase(sendMessage.rejected  ,(state, { payload }) => {
      state.loading = false;
    } )
    .addCase(sendMessage.fulfilled ,(state, { payload }) => {
      state.loading = false;
    } )
  },
});

export const {} = contactSlice.actions;

export default contactSlice.reducer;
