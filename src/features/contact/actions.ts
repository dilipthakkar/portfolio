import { MessageTpye } from "./contact-slice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, setDoc , collection , addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
export const sendMessage = createAsyncThunk(
  "Contact/sendMessage",
  async (message: MessageTpye, { rejectWithValue }) => {
    const collectionRef = collection(db , "messages");
    const result = await addDoc(collectionRef, message);
    return JSON.parse(JSON.stringify(result));
  }
);
