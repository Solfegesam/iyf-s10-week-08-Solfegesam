function Header() {
  return (
    <header
      style={{
        padding: "16px",
        borderBottom: "1px solid #ddd",
        marginBottom: "20px",
      }}
    >
      <h1>CommunityHub</h1>

      <nav style={{ display: "flex", gap: "15px" }}>
        <a href="#">Home</a>
        <a href="#">Posts</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
}

export default Header;