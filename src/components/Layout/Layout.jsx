import theme from "../../styles/theme";

function Layout({ children, sidebar }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme.colors.background,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: theme.spacing.xl,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: theme.spacing.xl,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <main style={{ flex: "2 1 600px" }}>{sidebar?.main}</main>

          <aside style={{ flex: "1 1 260px" }}>{sidebar?.side}</aside>
        </div>
      </div>
    </div>
  );
}

export default Layout;