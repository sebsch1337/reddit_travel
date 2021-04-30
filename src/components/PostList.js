import React from 'react';
import { Post } from './Post';

export const PostList = ({posts}) => {
    return (
        <div className="post-list">
            {posts.map((post, index) => {
                // console.log(post);
                if (!post.data.selftext | index === 0) {
                    return null;
                }

                return <Post key={index} post={post.data} />;
            })}
        </div>
    );
}