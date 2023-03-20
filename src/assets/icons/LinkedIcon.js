import React from "react";

function LinkedIcon({ className = "w-full h-full" }) {
  return (
    <svg
      width="100%"
      height="100%"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M4.983 7.196a2.188 2.188 0 1 0 0-4.376 2.188 2.188 0 0 0 0 4.376Z"></path>
      <path d="M9.237 8.855v12.139h3.769V14.99c0-1.584.298-3.118 2.262-3.118 1.937 0 1.96 1.81 1.96 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237Zm-6.142 0H6.87v12.139H3.095V8.854Z"></path>
    </svg>
  );
}

export default LinkedIcon;