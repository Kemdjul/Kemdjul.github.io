"use client";
import React from "react";

const ArrowDown = React.forwardRef(({ className, ...props }, ref) => (
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
      d="M29.3332 10.6667V43.1333L14.3998 28.2L10.6665 32L31.9998 53.3333L53.3332 32L49.5998 28.2L34.6665 43.1333V10.6667H29.3332Z"
      fill="#101010"
    />
  </svg>
));

ArrowDown.displayName = "Down Arrow";
export default ArrowDown;
