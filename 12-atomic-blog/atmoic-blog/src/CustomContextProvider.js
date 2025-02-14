import { createContext, useContext, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

const PostContext = createContext();

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function CustomContextProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const value = {
    posts: searchedPosts,
    onAddPost: handleAddPost,
    onClearPosts: handleClearPosts,
    searchQuery,
    setSearchQuery,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

function usePost() {
  const res = useContext(PostContext);
  if (res === undefined) throw new Error("usePost should be used inside APP");
  return res;
}

export { CustomContextProvider, usePost };
