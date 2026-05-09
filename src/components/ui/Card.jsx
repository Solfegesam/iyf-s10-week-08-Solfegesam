import theme from "../../styles/theme";

function Card({ children, style }) {
  return (
    <div
      style={{
        background: theme.colors.white,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.radius.md,
        padding: theme.spacing.md,
        marginBottom: theme.spacing.sm,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Card;