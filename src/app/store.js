import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import topicsReducer from "../features/topics/topicsSlice";

export default configureStore({
    reducer: {
        posts: postsReducer,
        topics: topicsReducer
    }
});