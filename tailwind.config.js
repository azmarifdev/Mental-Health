/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#132643",
                secondary: "#1a345a",
                dark: "#EAF1FF",
                white: "#F8FBFF",
            },
        },
    },

    plugins: [],
};
