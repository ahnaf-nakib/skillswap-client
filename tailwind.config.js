// tailwind.config.js (সঠিক কোড)

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
  
    // --- এই অংশটি যোগ করা হয়েছে ---
    plugins: [
      require('daisyui'),
    ],
  
    // --- এই অংশটিও যোগ করা হয়েছে ---
    daisyui: {
      themes: ["light"], // এখানে আমরা ডিফল্ট থিম "light" সেট করে দিলাম
    },
    // ------------------------------
  }