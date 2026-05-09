import { useState } from "react";

function CreatePost({ addPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      author: "You",
      likes: 0,
    };

    addPost(newPost);

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: "20px" }}>
      <h3>Create Post</h3>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", marginBottom: "10px" }}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ display: "block", marginBottom: "10px" }}
      />

      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePost;