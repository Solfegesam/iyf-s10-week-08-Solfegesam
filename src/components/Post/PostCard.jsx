import { useTheme } from "../../context/ThemeContext";

function PostCard({ post, onLike, onDelete }) {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: "16px",
        marginBottom: "12px",
        borderRadius: "10px",
        background: theme.colors.card,
        border: `1px solid ${theme.colors.border}`,
      }}
    >
      <h3>{post.title}</h3>
      <p style={{ color: theme.colors.muted }}>{post.content}</p>

      <small>By {post.author}</small>

      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button onClick={() => onLike(post.id)}>
          ❤️ Like ({post.likes})
        </button>

        <button onClick={() => onDelete(post.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default PostCard;