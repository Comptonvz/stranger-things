import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    /// navigation links
    <nav>
      <Link className="link" to="/">
        Login
      </Link>
      <Link className="link" to="/home">
        Home
      </Link>
      <Link className="link" to="/posts">
        Posts
      </Link>
      <Link className="link" to="/profile">
        Profile
      </Link>
      <Link className="link" to="/logout">
        Logout
      </Link>
    </nav>
  );
}
