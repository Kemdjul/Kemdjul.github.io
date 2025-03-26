"use client";
import React from "react";

const Filter = React.forwardRef(({ className, ...props }, ref) => (
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
    <path d="M8 8H56L37.3333 34.1787V56H26.6667V34.1787L8 8Z" fill="#101010" />
  </svg>
));

Filter.displayName = "Filter";
export default Filter;
