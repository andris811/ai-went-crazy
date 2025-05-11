import React from "react";

type ButtonRetroProps = {
  children: React.ReactNode;
  color?: "cyan" | "pink" | "blue" | "purple";
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
};

const colorMap = {
  cyan: {
    border: "border-cyan-400",
    text: "text-cyan-400",
    bgHover: "hover:bg-cyan-400",
    textHover: "hover:text-black",
    shadow: "hover:shadow-[4px_4px_0_#00ffff]",
  },
  pink: {
    border: "border-pink-400",
    text: "text-pink-400",
    bgHover: "hover:bg-pink-400",
    textHover: "hover:text-black",
    shadow: "hover:shadow-[4px_4px_0_#ff69b4]",
  },
  blue: {
    border: "border-blue-400",
    text: "text-blue-400",
    bgHover: "hover:bg-blue-400",
    textHover: "hover:text-black",
    shadow: "hover:shadow-[4px_4px_0_#3b82f6]",
  },
  purple: {
    border: "border-purple-400",
    text: "text-purple-400",
    bgHover: "hover:bg-purple-400",
    textHover: "hover:text-black",
    shadow: "hover:shadow-[4px_4px_0_#a855f7]",
  },
};

const sizeMap = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

const ButtonRetro: React.FC<ButtonRetroProps> = ({
  children,
  color = "cyan",
  onClick,
  size = "md",
}) => {
  const styles = colorMap[color];
  const sizeClass = sizeMap[size];

  return (
    <button
      onClick={onClick}
      className={`button-glitch ${sizeClass} bg-[var(--color-bg)] border-2 ${styles.border} ${styles.text} ${styles.bgHover} ${styles.textHover} ${styles.shadow} transition duration-150 ease-in-out`}
    >
      {children}
    </button>
  );
};

export default ButtonRetro;
