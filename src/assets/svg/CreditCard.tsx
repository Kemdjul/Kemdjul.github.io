"use client";
import React from "react";

const CreditCard = React.forwardRef(({ className, ...props }, ref) => (
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
      d="M5.3335 18.6667C5.3335 16.5449 6.17635 14.5101 7.67664 13.0098C9.17693 11.5095 11.2118 10.6667 13.3335 10.6667H50.6668C52.7886 10.6667 54.8234 11.5095 56.3237 13.0098C57.824 14.5101 58.6668 16.5449 58.6668 18.6667V21.3333H5.3335V18.6667ZM5.3335 26.6667V45.3333C5.3335 47.4551 6.17635 49.4899 7.67664 50.9902C9.17693 52.4905 11.2118 53.3333 13.3335 53.3333H50.6668C52.7886 53.3333 54.8234 52.4905 56.3237 50.9902C57.824 49.4899 58.6668 47.4551 58.6668 45.3333V26.6667H5.3335ZM18.6668 32C17.9596 32 17.2813 32.281 16.7812 32.7811C16.2811 33.2812 16.0002 33.9594 16.0002 34.6667C16.0002 35.3739 16.2811 36.0522 16.7812 36.5523C17.2813 37.0524 17.9596 37.3333 18.6668 37.3333H32.0002C32.7074 37.3333 33.3857 37.0524 33.8858 36.5523C34.3859 36.0522 34.6668 35.3739 34.6668 34.6667C34.6668 33.9594 34.3859 33.2812 33.8858 32.7811C33.3857 32.281 32.7074 32 32.0002 32H18.6668Z"
      fill="#101010"
    />
  </svg>
));

CreditCard.displayName = "Credit Card";
export default CreditCard;
