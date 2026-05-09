import { useTheme } from "../../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        padding: "16px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: theme.colors.card,
        borderBottom: `1px solid ${theme.colors.border}`,
      }}
    >
      <h2 style={{ margin: 0 }}>CommunityHub</h2>

      <button onClick={toggleTheme}>
        {theme.mode === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
}

export default Header;