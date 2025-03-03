import React, { useState } from "react";
import { loginUser } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  return (
    <div className="login">
      <h4>Login</h4>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(username, password);
          console.log("loginuser result:", result);
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          setPassword("");
          setUsername("");
          navigate("/Posts");
        }}
      >
        <input
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit" type="submit">
          Submit!
        </button>
      </form>
      <p>Create Account</p>
      <Link className="reg" to="/register">
        Register
      </Link>
    </div>
  ); //// ^^^ above we put a register button and link that will take u to the register page
}
