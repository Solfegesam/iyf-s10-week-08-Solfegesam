import { useEffect, useState } from "react";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Sidebar from "./components/Layout/Sidebar";
import Layout from "./components/Layout/Layout";

import PostList from "./components/Post/PostList";
import CreatePost from "./components/Post/CreatePost";

import postsData from "./data/posts";

function App() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("community-posts");
    return saved ? JSON.parse(saved) : postsData;
  });

  useEffect(() => {
    localStorage.setItem("community-posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const likePost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <>
      <Header />

      <Layout
        sidebar={{
          main: (
            <>
              <h2>Community Posts</h2>

              <CreatePost onAddPost={addPost} />

              <PostList
                posts={posts}
                onLike={likePost}
                onDelete={deletePost}
              />
            </>
          ),
          side: <Sidebar />,
        }}
      />

      <Footer />
    </>
  );
}

export default App;