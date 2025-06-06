"use client";
import React from "react";

const Fail = React.forwardRef(({ className, ...props }, ref) => (
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
      d="M32 4C16.4 4 4 16.4 4 32C4 47.6 16.4 60 32 60C47.6 60 60 47.6 60 32C60 16.4 47.6 4 32 4ZM42.8 46L32 35.2L21.2 46L18 42.8L28.8 32L18 21.2L21.2 18L32 28.8L42.8 18L46 21.2L35.2 32L46 42.8L42.8 46Z"
      fill="#101010"
    />
  </svg>
));

Fail.displayName = "Fail";
export default Fail;
