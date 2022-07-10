import { createPost } from "../api/postfetch";
import React, { useState } from "react";

export default function Posting({ token }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <h4>New Post</h4>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createPost(title, description, price, token);
        }}
      >
        <input
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)} //// might need something after setTitle
        />
        <input
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)} //// same
        />
        <input
          value={price}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)} //// same
        />
        <button type="submit">POST</button>
      </form>
    </div>
  );
}
