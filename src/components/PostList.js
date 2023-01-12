import React from 'react';
import { Post } from './Post';

export const PostList = ({posts}) => {
    return (
        <div className="post-list">
            {posts.map((post, index) => {
                // console.log(post);
                if (index === 0) {
                    return null;
                }

                return <Post key={index} post={post.data} img={false} />;
            })}
        </div>
    );
}