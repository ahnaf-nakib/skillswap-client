# SkillSwap – A Local Skill Exchange Platform

[cite_start]SkillSwap is an interactive platform for individuals to offer, learn, and trade skills within their local area[cite: 7]. [cite_start]Whether it’s guitar lessons, language exchange, coding help, or yoga training — users can browse listings, rate experiences, and connect with local skill providers[cite: 8].

## 🔗 Live URL

**[https://your-live-site-url.netlify.app](https://skillswap009.netlify.app/)**

## 🚀 Key Features

This project implements the following features:

* **Full User Authentication:**
    * [cite_start]Register and Login with Email & Password[cite: 86, 102].
    * [cite_start]Social login using Google[cite: 99, 117].
    * [cite_start]"Forgot Password" functionality[cite: 92, 136].
    * [cite_start]Password toggle (Show/Hide) button on login and register forms[cite: 141].

* **Profile Management:**
    * [cite_start]Users can view their profile information (Name, Email, Image) [cite: 124-127].
    * [cite_start]Users can update their Name and Photo URL[cite: 134].

* **Dynamic Pages & Routing:**
    * [cite_start]An engaging Hero Slider (using Swiper.js) and a "Popular Skills" card section on the homepage[cite: 66, 67].
    * [cite_start]A "Skill Details" page showing all information for a skill and a "Book Session" form[cite: 78, 79].
    * Private Routes implemented. [cite_start]Users cannot access "Skill Details" or "My Profile" without being logged in[cite: 77, 122].

* **Modern Design:**
    * [cite_start]Subtle scroll animations using the AOS package[cite: 16, 143].
    * [cite_start]The entire website is fully responsive for mobile, tablet, and desktop devices[cite: 12].

## 🛠️ NPM Packages Used

This project was built using the following NPM packages:

* **`react`** (UI Library)
* **`react-router-dom`** (Page Navigation)
* **`firebase`** (Authentication)
* **`tailwindcss`** (CSS Framework)
* **`daisyui`** (Tailwind CSS Component Library)
* [cite_start]**`swiper`** (For the Hero Slider) [cite: 147]
* [cite_start]**`react-hot-toast`** (For success/error notifications) [cite: 146]
* [cite_start]**`aos`** (For scroll animations) [cite: 143]
