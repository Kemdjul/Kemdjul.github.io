"use client";
import React from "react";

const Return = React.forwardRef(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    {...props}
    className={className}
    width="40"
    height="36"
    viewBox="0 0 40 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.6999 0.851038C17.9422 0.851038 17.2155 1.15206 16.6796 1.68788C16.1438 2.22369 15.8428 2.95042 15.8428 3.70818C15.8428 4.46594 16.1438 5.19267 16.6796 5.72849C17.2155 6.2643 17.9422 6.56532 18.6999 6.56532H26.4942C28.4674 6.60375 30.3468 7.41457 31.7287 8.82361C33.1106 10.2326 33.8846 12.1275 33.8846 14.101C33.8846 16.0746 33.1106 17.9694 31.7287 19.3785C30.3468 20.7875 28.4674 21.5983 26.4942 21.6368H13.7628V16.6996C13.7627 16.1346 13.595 15.5823 13.2811 15.1126C12.9671 14.6428 12.521 14.2767 11.999 14.0605C11.477 13.8443 10.9026 13.7877 10.3484 13.8979C9.79428 14.0081 9.28523 14.2802 8.88566 14.6796L1.09709 22.4682C0.695837 22.8668 0.421915 23.3755 0.310018 23.9299C0.19812 24.4843 0.253282 25.0594 0.468516 25.5825C0.607563 25.9253 0.815182 26.2368 1.09137 26.5168L8.88566 34.311C9.28523 34.7105 9.79428 34.9825 10.3484 35.0927C10.9026 35.2029 11.477 35.1463 11.999 34.9301C12.521 34.7139 12.9671 34.3478 13.2811 33.8781C13.595 33.4083 13.7627 32.856 13.7628 32.291V27.351H26.4942C28.2506 27.3768 29.9946 27.0532 31.6248 26.3989C33.2549 25.7446 34.7388 24.7727 35.9899 23.5398C37.2411 22.3068 38.2347 20.8374 38.9128 19.217C39.591 17.5967 39.9402 15.8576 39.9402 14.101C39.9402 12.3445 39.591 10.6054 38.9128 8.98503C38.2347 7.36464 37.2411 5.89526 35.9899 4.66232C34.7388 3.42939 33.2549 2.45751 31.6248 1.80321C29.9946 1.14891 28.2506 0.825246 26.4942 0.851038H18.6999Z"
      fill="black"
    />
  </svg>
));

Return.displayName = "Return";
export default Return;
