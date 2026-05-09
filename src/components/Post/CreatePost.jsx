import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Card from "../ui/Card";
import theme from "../../styles/theme";

function CreatePost({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Both fields are required.");
      return;
    }

    onAddPost({
      id: Date.now(),
      title,
      content,
      author: "You",
      likes: 0,
    });

    setTitle("");
    setContent("");
    setError("");
  };

  return (
    <Card>
      <h3 style={{ marginBottom: theme.spacing.sm }}>
        Create Post
      </h3>

      {error && (
        <p style={{ color: theme.colors.danger }}>
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Post title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError("");
          }}
        />

        <textarea
          placeholder="Write content..."
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setError("");
          }}
          rows="5"
          style={{
            width: "100%",
            padding: theme.spacing.sm,
            borderRadius: theme.radius.sm,
            border: `1px solid ${theme.colors.border}`,
            marginBottom: theme.spacing.sm,
          }}
        />

        <Button
          type="submit"
          variant="primary"
          disabled={!title.trim() || !content.trim()}
        >
          Post
        </Button>
      </form>
    </Card>
  );
}

export default CreatePost;