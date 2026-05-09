import theme from "../../styles/theme";

function Button({
  children,
  onClick,
  variant = "default",
  size = "md",
  disabled = false,
  type = "button",
}) {
  const base = {
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
  };

  const variants = {
    default: {
      background: theme.colors.white,
      border: `1px solid ${theme.colors.border}`,
      color: theme.colors.text,
    },
    primary: {
      background: theme.colors.primary,
      border: "none",
      color: theme.colors.white,
    },
    danger: {
      background: theme.colors.danger,
      border: "none",
      color: theme.colors.white,
    },
  };

  const sizes = {
    sm: { padding: "6px 10px", fontSize: "12px" },
    md: { padding: "8px 14px", fontSize: "14px" },
    lg: { padding: "10px 16px", fontSize: "16px" },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        ...base,
        ...variants[variant],
        ...sizes[size],
      }}
    >
      {children}
    </button>
  );
}

export default Button;