"use client";
import React from "react";

const Dropdown = React.forwardRef(({ className, ...props }, ref) => (
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
    <path d="M32.0003 40L18.667 26.6667H45.3337L32.0003 40Z" fill="#101010" />
  </svg>
));

Dropdown.displayName = "Dropdown";
export default Dropdown;
