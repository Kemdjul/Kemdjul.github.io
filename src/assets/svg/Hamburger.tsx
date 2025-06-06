"use client";
import React from "react";

const Hamburger = React.forwardRef(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    {...props}
    className={className}
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 16H56V21.3333H8V16ZM8 29.3333H56V34.6667H8V29.3333ZM8 42.6667H56V48H8V42.6667Z"
      fill="#101010"
    />
  </svg>
));

Hamburger.displayName = "Hamburger";
export default Hamburger;
