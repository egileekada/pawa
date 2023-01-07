/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      sans: [
        '"Inter-Medium"', 
      ],
      "Inter-ExtraBold": [
        "Inter-ExtraBold",
        // Font-Weight: 800
      ],
      "Inter-Bold": [
        "Inter-Bold",
        // Font-Weight: 700
      ],
      "Inter-Medium": [
        "Inter-Medium",
        // Font-Weight: 500
      ],
      "Inter-Regular": [
        "Inter-Regular",
        // Font-Weight: 400
      ],
      "Inter-SemiBold": [
        "Inter-SemiBold",
        // Font-Weight: 600
      ], 
    },
    extend: {},
  },
  plugins: [],
}
