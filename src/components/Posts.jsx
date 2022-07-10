import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "api/postfetch";
import { Link } from "react-router-dom";

export function myOwn() {
  if (Posts.isAuthor) {
    console.log("this is the author");
  }
}

export default function Posts() {
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

            <Link onClick={myOwn()} className="edit" to="/edit">
              Edit Post
            </Link>
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
