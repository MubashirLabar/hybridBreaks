import React from "react";

function PlayIcon({ className = "w-full h-full" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 42 47"
      className={className}
    >
      <path
        fill="currentColor"
        d="M40.5 20.902c2 1.155 2 4.041 0 5.196L5.25 46.45c-2 1.154-4.5-.289-4.5-2.598V3.148C.75.84 3.25-.604 5.25.55L40.5 20.902z"
      ></path>
    </svg>
  );
}

export default PlayIcon;
