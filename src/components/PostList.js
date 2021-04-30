import React from 'react';

export const PostList = ({posts}) => {
    return (
        <ul>
            {posts.map((post, index) => {
                return <li key={index}>{post.data.title}</li>;
            })}
        </ul>
    )
}