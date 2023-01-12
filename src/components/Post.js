import React from 'react';

export const Post = ({post}) => {
    // console.log(post);

    const creationDate = new Date(post.created * 1000);

    return (
        <article>
            <div className="article-info">
                <span className="material-icons">arrow_upward</span>
                {post.ups}
                <span className="material-icons">arrow_downward</span>
            </div>
            <div className="article-box">
                <div className="article-header">
                    <h1>{post.title}</h1>
                    <h2>Posted by {post.author} on {creationDate.toLocaleDateString("en-US")} {creationDate.toLocaleTimeString("en-US")}</h2>
                </div>
                <p>{post.post_hint === "image" ? <img src={post.url} alt="Post" /> : post.selftext}</p>
            </div>
        </article>
    );
}