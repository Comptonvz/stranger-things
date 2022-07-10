export const fetchAllPosts = async () => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts" /// getting all the posts from the post api
  );
  const posts = await response.json(); ///ask about .json
  return posts;
};

const postsurl =
  "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts"; ///getting post url again
export const createPost = async (title, description, price, token) => {
  //function with create post that takes all info
  const response = await fetch(postsurl, {
    method: "POST", /// im posting to the api so POST is used
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, /// accessing token to be able to post
    },
    body: JSON.stringify({
      ///will always need a body
      post: {
        title,
        description,
        price,
      },
    }),
  });
  const result = await response.json(); /// var that grabs the info we provided above
  return result; /// returns the title description and ext....
};
