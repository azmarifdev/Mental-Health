/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#001d30",
                secondary: "#001422",
                dark: "#F7FAFC",
                white: "#2D3748",
            },
        },
    },

    plugins: [],
};
