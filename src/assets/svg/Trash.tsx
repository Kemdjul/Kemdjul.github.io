"use client";
import React from "react";

const Trash = React.forwardRef(({ className, ...props }, ref) => (
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
      d="M50.6668 10.6667H41.3335L38.6668 8H25.3335L22.6668 10.6667H13.3335V16H50.6668M16.0002 50.6667C16.0002 52.0812 16.5621 53.4377 17.5623 54.4379C18.5625 55.4381 19.919 56 21.3335 56H42.6668C44.0813 56 45.4379 55.4381 46.4381 54.4379C47.4383 53.4377 48.0002 52.0812 48.0002 50.6667V18.6667H16.0002V50.6667Z"
      fill="#101010"
    />
  </svg>
));

Trash.displayName = "Trash";
export default Trash;
