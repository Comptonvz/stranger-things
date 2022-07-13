import {
  // Home,
  Login,
  Register,
  Logout,
  Posts,
  Profile,
  Navbar,
  Posting,
  Edit,
} from "components";

import { fetchMe } from "api/auth";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [targetPost, setTargetPost] = useState({});
  console.log("Current user is ", currentUser);

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");

    async function getMe() {
      const result = await fetchMe(localStorageToken);
      console.log("result from fetch me", result);
      setCurrentUser(result.data);
      setToken(localStorageToken);
    }
    if (localStorageToken) {
      getMe();
    }
  }, [token]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route
          path="/posts"
          element={<Posts currentUser={currentUser} token={token} />}
        />
        <Route path="/profile" element={<Profile />} />
        {currentUser._id ? (
          <Route path="/posting" element={<Posting token={token} />} />
        ) : null}
        <Route path="/logout" element={<Logout setToken={setToken} />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}
