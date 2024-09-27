/** @type {import('tailwindcss').Config} */ 
import form from '@tailwindcss/forms' 
module.exports = {  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
], theme: { extend: {}, }, plugins: [form], }