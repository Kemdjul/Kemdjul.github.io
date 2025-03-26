"use client";
import React from "react";

const Check = React.forwardRef(({ className, ...props }, ref) => (
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
      d="M25.4666 48L10.2666 32.8L14.0666 29L25.4666 40.4L49.9333 15.9333L53.7333 19.7334L25.4666 48Z"
      fill="#101010"
    />
  </svg>
));

Check.displayName = "Check";
export default Check;
