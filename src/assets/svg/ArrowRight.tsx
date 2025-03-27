"use client";
import React from "react";

const ArrowRight = React.forwardRef(({ className, ...props }, ref) => (
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
      d="M37.3332 48L33.5998 44.1333L43.0665 34.6667H10.6665V29.3333H43.0665L33.5998 19.8667L37.3332 16L53.3332 32L37.3332 48Z"
      fill="#101010"
    />
  </svg>
));

ArrowRight.displayName = "Right Arrow";
export default ArrowRight;
