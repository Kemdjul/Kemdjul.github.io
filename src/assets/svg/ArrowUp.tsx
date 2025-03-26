"use client";
import React from "react";

const ArrowUp = React.forwardRef(({ className, ...props }, ref) => (
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
      d="M29.3332 53.3333V20.8667L14.3998 35.8L10.6665 32L31.9998 10.6667L53.3332 32L49.5998 35.8L34.6665 20.8667V53.3333H29.3332Z"
      fill="#101010"
    />
  </svg>
));

ArrowUp.displayName = "Up Arrow";
export default ArrowUp;
