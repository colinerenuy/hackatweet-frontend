
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const tweetsSlice = createSlice({
 name: 'likes',

  initialState,
 reducers: {
   addLike: (state, action) => {
     state.value.push(action.payload);
   },
   removeLike: (state, action) => {
    state.value = state.value.filter(tweet => tweet.text !== action.payload.text);
},
 },
});

export const { addLike, removeLike } = tweetsSlice.actions;
export default tweetsSlice.reducer;