"use client";
import React from "react";

const Close = React.forwardRef(({ className, ...props }, ref) => (
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
      d="M17.0668 50.6667L13.3335 46.9333L28.2668 32L13.3335 17.0667L17.0668 13.3333L32.0002 28.2667L46.9335 13.3333L50.6668 17.0667L35.7335 32L50.6668 46.9333L46.9335 50.6667L32.0002 35.7333L17.0668 50.6667Z"
      fill="#101010"
    />
  </svg>
));

Close.displayName = "Close";
export default Close;
