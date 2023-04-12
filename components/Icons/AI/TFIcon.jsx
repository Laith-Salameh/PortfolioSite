import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      {...props}
    >
      <g
        fill="#01c38d"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M16 39.609l7 4V4l-7 4z" transform="scale(5.33333)"></path>
        <path
          d="M23 12.433L6 22.25v-8.5l17-9.817zM32 39.609l-7 4V4l7 4z"
          transform="scale(5.33333)"
        ></path>
        <path
          d="M25 12.433l17 9.817v-8.5L25 3.933zM29 19.732v7.633l7 4.042v-7.632z"
          transform="scale(5.33333)"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
