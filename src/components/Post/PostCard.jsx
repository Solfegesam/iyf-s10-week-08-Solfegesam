import Card from "../ui/Card";
import Button from "../ui/Button";
import theme from "../../styles/theme";

function PostCard({ post, onLike, onDelete }) {
  return (
    <Card>
      <h3 style={{ marginBottom: theme.spacing.xs }}>
        {post.title}
      </h3>

      <p style={{ color: theme.colors.muted }}>
        {post.content}
      </p>

      <small style={{ display: "block", marginTop: "8px" }}>
        By {post.author}
      </small>

      <div
        style={{
          display: "flex",
          gap: theme.spacing.sm,
          marginTop: theme.spacing.md,
          flexWrap: "wrap",
        }}
      >
        <Button onClick={() => onLike(post.id)} variant="default">
          ❤️ Like ({post.likes})
        </Button>

        <Button onClick={() => onDelete(post.id)} variant="danger">
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default PostCard;