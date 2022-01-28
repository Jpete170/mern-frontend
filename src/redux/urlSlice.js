import { createSlice } from "@reduxjs/toolkit";

export const urlID_Slice = createSlice({
    name: 'airbnb_id',
    initialState:[
        {id: 1, listingID: ''}
    ],
    reducers:{ //The goal here is to have persistent _id access between the AirBnB Listings
        updateID: (state, action) =>{
            const index = state.findIndex((urlID) => urlID._id === action.payload.id)
            state[index].listingID = action.payload.listingID;
        }
    }
})

export const {updateID} = urlID_Slice.actions;

export default urlID_Slice.reducer;