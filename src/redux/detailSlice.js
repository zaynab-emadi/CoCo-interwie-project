import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDetailsRequest } from "../API/details";

const initialState = {
  error: "",
  loading: false,
  detail: [],
};

export const fetchDetails = createAsyncThunk(
  "detail/fetchDetail",
  (instagramId) => {
    return fetchDetailsRequest(instagramId);
  }
);

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      return {
        ...state,
        detail: action.payload.data,
        loading: false,
      };
    });
    builder.addCase(fetchDetails.rejected, (state, action) => {
      return {
        ...state,
        detail: [],
        loading: false,
        error: action.payload,
      };
    });
  },
});

export default detailSlice.reducer;
