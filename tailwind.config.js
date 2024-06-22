/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens:{
    //   'device':'950px',
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
 
      colors: {
        "text-gray-f": "#7E96A9",
        "text-sl": "#0F161C",
        "text-gray": "#A9B9C6",
        "text-blue": "#066ADF",
        "text-grey": "#668199",
        "bg-blue": "#E9F3FE",
        "bg-back": "#DAE1E6,",
      },
    },
  },
  plugins: [],
};
 