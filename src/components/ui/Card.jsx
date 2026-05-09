import theme from "../../styles/theme";

function Card({ children, style }) {
  return (
    <div
      style={{
        background: theme.colors.card,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.radius.lg,
        padding: theme.spacing.lg,
        boxShadow: theme.shadow.sm,
        marginBottom: theme.spacing.md,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Card;