"use client";
import React from "react";

const Success = React.forwardRef(({ className, ...props }, ref) => (
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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M32.0001 5.33337C17.2726 5.33337 5.3335 17.2725 5.3335 32C5.3335 46.7275 17.2726 58.6668 32.0001 58.6668C46.7276 58.6668 58.6669 46.7275 58.6669 32C58.6669 17.2725 46.7277 5.33337 32.0001 5.33337ZM42.0421 22.4726L45.813 26.2435L29.3335 42.792L19.4481 32.9066L23.2189 29.1357L29.3335 35.2504L42.0421 22.4726Z"
      fill="#101010"
    />
  </svg>
));

Success.displayName = "Success";
export default Success;
