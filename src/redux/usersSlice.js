import { createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import {fetchTopEngagedPagesRequest} from "../API/engaged";
import {fetchTopFollowersRequest} from "../API/followers";

const initialState = {
    error : "",
    topEngaged : [],
    topFollowers : [],
    details : [],
    loading: false,
    totalItemsTopEngaged: 1,
    totalItemsTopFollower: 1,
}

export const fetchTopEngagedPages = createAsyncThunk(
    "users/fetchTopEngagedPages",
    () => {
        return fetchTopEngagedPagesRequest();
    }
)

export const fetchTopFollowers = createAsyncThunk(
    "users/fetchTopFollowers",
    () => {
        return fetchTopFollowersRequest();
    }
)



export const usersSlice = createSlice({
    name : "users",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchTopEngagedPages.pending , (state) => {
            return {...state , loading: true }
        });
        builder.addCase(fetchTopEngagedPages.fulfilled , (state, action) => {
            return {
                ...state,
                loading: false,
                topEngaged: action.payload.data,
                totalItemsTopEngaged : action.payload.total,
            }
        });
        builder.addCase(fetchTopEngagedPages.rejected , (state , action) => {

            return {
                ...state,
                topEngaged: [],
                loading: false,
                error: action.payload,
            }
        });
        builder.addCase(fetchTopFollowers.pending , (state) => {
            return {
                ...state,
                loading: true,
            };
        });
        builder.addCase(fetchTopFollowers.fulfilled , (state, action) => {
            return {
                ...state,
                topFollowers: action.payload.data,
                totalItemsTopFollower: action.payload.total,
                loading: false
            };
        });
        builder.addCase(fetchTopFollowers.rejected , (state,action) => {
            return {
                ...state ,
                loading: false ,
                error: action.payload,
            };
        });

    }

});
export default usersSlice.reducer;