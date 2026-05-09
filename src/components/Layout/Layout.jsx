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
          padding: theme.spacing.lg,
        }}
      >
        {/* Responsive container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing.lg,
          }}
        >
          {/* Main layout grid */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: theme.spacing.lg,

              // RESPONSIVE BREAKPOINT
              flexWrap: "wrap",
            }}
          >
            {/* Main content */}
            <main
              style={{
                flex: "2 1 600px",
                minWidth: "280px",
              }}
            >
              {sidebar?.main}
            </main>

            {/* Sidebar */}
            <aside
              style={{
                flex: "1 1 250px",
                minWidth: "220px",
              }}
            >
              {sidebar?.side}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;