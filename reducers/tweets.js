
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const tweetsSlice = createSlice({
 name: 'tweets',

  initialState,
 reducers: {
   addTweet: (state, action) => {
     state.value.push(action.payload);
   },
   removeTweet: (state, action) => {
    state.value = state.value.filter(tweet => tweet.text !== action.payload.text);
},
 },
});

export const { addTweet, removeTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;