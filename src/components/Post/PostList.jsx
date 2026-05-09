import PostCard from "./PostCard";

function PostList({ posts, onLike, onDelete }) {
  if (posts.length === 0) {
    return <p>No posts yet. Be the first to post.</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={onLike}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default PostList;