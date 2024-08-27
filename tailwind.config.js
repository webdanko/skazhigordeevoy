/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./nuxt.config.{js,ts}",
		"./node_modules/flowbite/**/*.{js,ts}"
	],
	theme: {
		extend: {
			colors: {
				'boosty': {
					'50': '#fef5ee',
					'100': '#fde7d7',
					'200': '#fbcbad',
					'300': '#f8a779',
					'400': '#f47843',
					'500': '#f15f2c',
					'600': '#e13c15',
					'700': '#bb2b13',
					'800': '#952417',
					'900': '#782016',
					'950': '#410d09',
				},
				'patreon': {
					'50': '#f5f5f5',
					'100': '#e8e8e8',
					'200': '#d1d1d1',
					'300': '#b0b0b0',
					'400': '#878787',
					'500': '#6e6e6e',
					'600': '#5c5c5c',
					'700': '#4f4f4f',
					'800': '#454545',
					'900': '#3d3d3d',
					'950': '#000000',
				},
				'telegram': {
					'50': '#f2f8fd',
					'100': '#e3eefb',
					'200': '#c1ddf6',
					'300': '#8ac0ef',
					'400': '#4ca0e4',
					'500': '#2481cc',
					'600': '#1768b2',
					'700': '#145390',
					'800': '#144778',
					'900': '#163c64',
					'950': '#0f2742',
				},
				'youtube': {
					'50': '#fff0f0',
					'100': '#ffdddd',
					'200': '#ffc0c0',
					'300': '#ff9494',
					'400': '#ff5757',
					'500': '#ff2323',
					'600': '#ff0000',
					'700': '#d70000',
					'800': '#b10303',
					'900': '#920a0a',
					'950': '#500000',
				},
				'paypal': {
					'50': '#e0ecff',
					'100': '#cce1ff',
					'200': '#a8d4ff',
					'300': '#75c3ff',
					'400': '#38acff',
					'500': '#0a91ff',
					'600': '#007af5',
					'700': '#006ef5',
					'800': '#05359d',
					'900': '#071c50',
					'950': '#082054',
				},
			},
			fontFamily: {
				'sans': ['"Proxima Nova"', ...defaultTheme["fontFamily"].sans],
				'serif': ['"Proxima Nova"', ...defaultTheme["fontFamily"].serif],
			}
		}
	},
	plugins: [
		require("flowbite/plugin")
	],
};