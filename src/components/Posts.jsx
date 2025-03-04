import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "api/postfetch";
import { Link } from "react-router-dom";
import { deletePost } from "api/auth";

export default function Posts({ currentUser, token }) {
  const [postList, setPostList] = useState([]); //// creating post holder

  useEffect(() => {
    const getAllPosts = async () => {
      const result = await fetchAllPosts(); // grabbing each post & sending to setpost item in holder, creating an list/array of posts
      console.log(result);
      setPostList(result.data.posts);
    };
    getAllPosts();
  }, []);

  console.log("Rendered post item from line 5:", postList);

  return (
    <div className="flex">
      {postList.map((post) => {
        return (
          <body className="cards">
            <h4 className="card" key={post._id}>
              {post.title}
            </h4>
            <p>Price: {post.price}</p>
            <p>Description: {post.description}</p>
            {currentUser._id === post.author._id ? (
              <Link className="edit" to="/edit">
                Edit Post
              </Link>
            ) : null}
            {currentUser._id === post.author._id ? (
              <button
                onClick={() => {
                  deletePost(token, post._id);
                }}
              >
                DELETE
              </button>
            ) : null}
          </body>
        );
      })}

      <Link className="post" to="/posting">
        Create Post
      </Link>
    </div>
  );
}
///edit
