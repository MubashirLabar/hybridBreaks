/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "360px",
        // => @media (min-width: 360px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "769px",
        // => @media (min-width: 769px) { ... }
        xmd: "992px",
        // => @media (min-width: 992px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1200px",
        // => @media (min-width: 1200px) { ... }
        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }
        "3xl": "1950px",
        // => @media (min-width: 1440px) { ... }
        "4xl": "2450px",
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        primary: {
          700: withOpacity("--color-primary-700"),
          500: withOpacity("--color-primary-500"),
          300: withOpacity("--color-primary-300"),
        },
        secondary: {
          700: withOpacity("--color-secondary-700"),
          500: withOpacity("--color-secondary-500"),
          300: withOpacity("--color-secondary-300"),
        },
        service: {
          700: withOpacity("--color-service-text-700"),
          500: withOpacity("--color-service-text-500"),

          bg: withOpacity(" --color-service-bg"),
        },
        foreground: {
          700: withOpacity("--color-foreground-700"),
        },
        overlay: {
          700: withOpacity("--color-overlay-700"),
        },
        border: {
          700: withOpacity("--color-border-700"),
        },
      },
      maxWidth: {
        "8xl": "1320px",
      },
    },
  },
  plugins: [],
};
