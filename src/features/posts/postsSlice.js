import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadPostsForTopic = createAsyncThunk(
    'posts/loadPostsForTopic',
    async(topic) => {
        // console.log('Fetching posts for '+topic);
        const response = await fetch(`https://www.reddit.com/r/${topic}.json`);
        const json = await response.json();
        return json;
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: undefined,
        isLoadingPosts: false,
        failedToLoadPosts: false,
        noPostsFound: false
    },
    extraReducers: {
        [loadPostsForTopic.pending]: (state, action) => {
            state.isLoadingPosts = true;
            state.failedToLoadPosts = false;
        },
        [loadPostsForTopic.fulfilled]: (state, action) => {
            if (action.payload.error) {
                state.noPostsFound = true;
            } else
            {
                state.posts = action.payload.data.children;
            }
                state.isLoadingPosts = false;
                state.failedToLoadPosts = false;            
        },
        [loadPostsForTopic.rejected]: (state, action) => {
            // console.log('LOADING POSTS FAILED');
            state.isLoadingPosts = false;
            state.failedToLoadPosts = true;
        }
    }
});

// EXPORT SELECTORS
export const selectPosts = (state) => state.posts.posts;
export const isLoadingPosts = (state) => state.posts.isLoadingPosts;
export const failedToLoadPosts = (state) => state.posts.failedToLoadPosts;
export const noPostsFound = (state) => state.posts.noPostsFound;

// EXPORT REDUCER
export default postsSlice.reducer;