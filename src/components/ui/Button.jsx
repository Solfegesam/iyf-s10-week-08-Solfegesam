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
    fontWeight: 600,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "0.2s",
    opacity: disabled ? 0.6 : 1,
  };

  const variants = {
    default: {
      background: "#fff",
      border: `1px solid ${theme.colors.border}`,
      color: theme.colors.text,
    },
    primary: {
      background: theme.colors.primary,
      color: "#fff",
    },
    danger: {
      background: theme.colors.danger,
      color: "#fff",
    },
  };

  const sizes = {
    sm: { padding: "6px 10px", fontSize: "12px" },
    md: { padding: "9px 14px", fontSize: "14px" },
    lg: { padding: "12px 18px", fontSize: "16px" },
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
      onMouseOver={(e) => {
        if (disabled) return;
        if (variant === "primary")
          e.target.style.background = theme.colors.primaryHover;
        if (variant === "danger")
          e.target.style.background = theme.colors.dangerHover;
      }}
      onMouseOut={(e) => {
        if (disabled) return;
        if (variant === "primary")
          e.target.style.background = theme.colors.primary;
        if (variant === "danger")
          e.target.style.background = theme.colors.danger;
      }}
    >
      {children}
    </button>
  );
}

export default Button;