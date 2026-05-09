import { useState } from "react";
import { useTheme } from "./context/ThemeContext";

import Header from "./components/Layout/Header";
import PostList from "./components/Post/PostList";
import CreatePost from "./components/Post/CreatePost";
import Sidebar from "./components/Layout/Sidebar";

function App() {
  const { theme } = useTheme();

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to CommunityHub",
      content: "This is your first post.",
      author: "Admin",
      likes: 2,
    },
  ]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const likePost = (id) => {
    setPosts(
      posts.map((p) =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div
      style={{
        background: theme.colors.background,
        minHeight: "100vh",
        color: theme.colors.text,
      }}
    >
      <Header />

      <div
        style={{
          display: "flex",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <div style={{ flex: 2 }}>
          <CreatePost addPost={addPost} />
          <PostList
            posts={posts}
            onLike={likePost}
            onDelete={deletePost}
          />
        </div>

        <div style={{ flex: 1 }}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;