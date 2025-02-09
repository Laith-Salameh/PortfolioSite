import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#01C38D"
        fillRule="evenodd"
        d="M25.21 24.21l-12.471 3.718a.525.525 0 01-.667-.606l4.456-21.511a.43.43 0 01.809-.094l8.249 17.661a.6.6 0 01-.376.832zm2.139-.878L17.8 2.883A1.531 1.531 0 0016.491 2a1.513 1.513 0 00-1.4.729L4.736 19.648a1.592 1.592 0 00.018 1.7l5.064 7.909a1.628 1.628 0 001.83.678l14.7-4.383a1.6 1.6 0 001-2.218z"
      ></path>
    </svg>
  );
}

export default Icon;