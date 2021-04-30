import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostList } from '../../components/PostList';
import { selectPosts, loadPostsForTopic, isLoadingPosts, failedToLoadPosts, noPostsFound } from './postsSlice';

export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const postsAreLoading = useSelector(isLoadingPosts);
    const loadingPostsFailed = useSelector(failedToLoadPosts);
    const postsNotFound = useSelector(noPostsFound);
    const topic = "Travel";

    useEffect(() => {
        dispatch(loadPostsForTopic(topic));
    }, [dispatch, topic])

    if (postsAreLoading) {
        console.log('Loading posts...');
        return <div>Loading posts...</div>;
    }

    if (loadingPostsFailed) {
        console.log('Loading posts failed...');
        return <div>Failed to load posts</div>;
    }

    if (postsNotFound) {
        console.log('No posts available...');
        return <div>No posts available</div>;
    }

    const loadedPosts = posts ? posts : [];

    return (
        <div>
            <ul>
                <PostList posts={loadedPosts} />
            </ul>
        </div>
    )
};