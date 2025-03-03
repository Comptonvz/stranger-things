const url = "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft";

export const registerUser = async (username, password) => {
  const response = await fetch(`${url}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  });
  const result = await response.json();
  return result;
};

export const loginUser = async (username, password) => {
  const response = await fetch(`${url}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  });
  const result = await response.json();
  console.log(response);
  return result;
};

export const fetchMe = async (token) => {
  const response = await fetch(`${url}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};

export const editPost = async (token, post) => {
  fetch(`${url}/posts/${post.postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: post.title,
        description: post.description,
        price: post.price,
      },
    }),
  });
};

export const deletePost = async (token, post) => {
  fetch(`${url}/posts/${post._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
