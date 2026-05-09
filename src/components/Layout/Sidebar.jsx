import { useTheme } from "../../context/ThemeContext";

function Sidebar() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: "16px",
        background: theme.colors.card,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: "10px",
      }}
    >
      <h3>CommunityHub</h3>
      <p>Navigation</p>

      <ul style={{ paddingLeft: "16px" }}>
        <li>Home</li>
        <li>Posts</li>
        <li>About</li>
      </ul>
    </div>
  );
}

export default Sidebar;