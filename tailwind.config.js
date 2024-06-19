/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/section/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1440px",
      "2xl": "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        sm: "24px",
        md: "32px",
        lg: "48px",
        xl: "64px",
        "2xl": "64px",
      },
      screens: {
        sm: "600px",
        md: "960px",
        lg: "1280px",
        xl: "1440px",
        "2xl": "1920px",
      },
    },
    extend: {
      colors: {
        primary: {
          brand: "#FD5D01", // Brand color
        },
        neutral: {
          black: "#000000",
          300: "#1A1A1A",
          200: "#919191",
          100: "#E0E0E0",
        },
      },
      fontFamily: {
        "neue-montreal": ["var(--neue-montreal)"],
        default: ["var(--default-font)"],
      },
      fontSize: {
        "title-01": ["72px", { lineHeight: "92px" }],
        "title-02": ["64px", { lineHeight: "80px" }],
        "title-03": ["56px", { lineHeight: "72px" }],
        "heading-01": ["40px", { lineHeight: "48px" }],
        "heading-02": ["32px", { lineHeight: "40px" }],
        "heading-03": ["28px", { lineHeight: "38px" }],
        "subheading-01": ["24px", { lineHeight: "32px" }],
        "subheading-02": ["20px", { lineHeight: "26px" }],
        "subheading-03": ["18px", { lineHeight: "26px" }],
        "subheading-04": ["16px", { lineHeight: "24px" }],
        "subheading-05": ["14px", { lineHeight: "20px" }],
        "body-01": ["24px", { lineHeight: "32px" }],
        "body-02": ["20px", { lineHeight: "28px" }],
        "body-03": ["18px", { lineHeight: "26px" }],
        "body-04": ["16px", { lineHeight: "24px" }],
        "body-05": ["14px", { lineHeight: "20px" }],
        "caption-01": ["12px", { lineHeight: "16px" }],
        "caption-02": ["10px", { lineHeight: "14px" }],
      },
    },
  },
  plugins: [
  ],
};
