import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: ['Philippines', 'Indonesia', 'Thailand'],
        selectedIndex: 0
    },
    reducers: {
        setTopic(state, action) {
            state.selectedIndex = state.topics.findIndex(arr => arr === action.payload);
        }
    }
});

// EXPORT ACTIONS
export const { setTopic } = topicsSlice.actions;

// EXPORT SELECTORS
export const selectTopics = (state) => state.topics.topics;
export const selectedIndex = (state) => state.topics.selectedIndex;

// EXPORT REDUCER
export default topicsSlice.reducer;