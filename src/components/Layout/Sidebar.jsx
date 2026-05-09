function Sidebar() {
  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: "10px",
        padding: "16px",
        backgroundColor: "#fafafa",
      }}
    >
      <h3>About CommunityHub</h3>

      <p style={{ fontSize: "14px", color: "#555" }}>
        A React-based community platform for posts, interaction, and learning.
      </p>

      <h4>Topics</h4>

      <ul style={{ paddingLeft: "18px", color: "#555" }}>
        <li>React</li>
        <li>State Management</li>
        <li>Frontend UI</li>
      </ul>
    </div>
  );
}

export default Sidebar;