/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {},
    },

    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                cmyk: {
                    ...require('daisyui/src/theming/themes')['cmyk'],
                    primary: '#3084FA',
                },
            },
            {
                sunset: {
                    ...require('daisyui/src/theming/themes')['sunset'],
                    primary: '#3084FA',
                },
            },
        ], // light, dark
        darkTheme: 'sunset',
    },
};
