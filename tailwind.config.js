/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx, mdx}',
        './components/**/*.{js,ts,jsx,tsx, mdx}',
        './app/**/*.{js,ts,jsx,tsx, mdx}',
        './src/**/*.{js,ts,jsx,tsx, mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx, mdx}',
        './src/components/**/*.{js,ts,jsx,tsx, mdx}',
        './src/app/**/*.{js,ts,jsx,tsx, mdx}',
        './src/pokemons/**/*.{js,ts,jsx,tsx, mdx}',
        './src/shopping-cart/**/*.{js,ts,jsx,tsx, mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at center, var(--tw-gradient-stops))',
            },
            colors: {
                primary: {
                    50: '#f5fbff',
                    100: '#e6f3ff',
                    200: '#bfe6ff',
                    300: '#8fd5ff',
                    400: '#4ab8ff',
                    500: '#1ea1ff',
                    600: '#1089e6',
                    700: '#0a5f99',
                    800: '#08456e',
                    900: '#04283b',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [],
}