"use client";
import styles from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
  secondary?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset" | undefined;
  name?: string;
  value?: string;
  includeStyles?: boolean;
};

const Button = ({
  children,
  className = "",
  secondary = false,
  disabled = false,
  onClick,
  type = "button",
  name = "",
  value = "",
  includeStyles = true,
}: Props) => {
  return (
    <button
      className={
        includeStyles
          ? `${styles.button} ${styles.md} ${secondary ? styles.secondary : styles.primary} ${className}`
          : className
      }
      disabled={disabled}
      onClick={onClick}
      type={type}
      name={name}
      value={value}
    >
      {children}
    </button>
  );
};

export default Button;
