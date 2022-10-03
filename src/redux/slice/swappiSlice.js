import {createSlice} from "@reduxjs/toolkit";
import reject from "lodash/reject"

export const swappiSlice = createSlice({
    name: "swappi",
    initialState: {
        favoriteCollection: [1,2,3],
    },
    reducers: {
        addFavoritePeople: (state, action) => {
            state.favoriteCollection.push(action.payload);
        },
        removeFavoritePeople: (state, action) => {
            state.favoriteCollection = reject(state.favoriteCollection, action.payload)
        },
    },
});

export const {
    addFavoritePeople, removeFavoritePeople

} = swappiSlice.actions;

export default swappiSlice.reducer;