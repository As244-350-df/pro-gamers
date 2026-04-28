# GamersTour 🎮

A pro gaming tournament platform website built with **React + Vite** and **Anime.js** animations.

## Tech Stack

- **React 18** – Component-based UI
- **Vite 5** – Lightning-fast dev server & build tool
- **Anime.js v4** – Scroll-triggered & entrance animations
- **CSS Modules** – Scoped component styles
- **Google Fonts** – Orbitron, Rajdhani, Share Tech Mono

## Features

- ⚡ Animated hero section with particle field & stat counters
- 🎮 8 featured competitive games (GTA V, Elden Ring, Cyberpunk 2077, and more)
- 🏆 5 live tournament listings with prize pools
- 📊 Animated global leaderboard with win-rate bars
- 🌐 Platform features section
- 📧 Newsletter subscription form
- 📱 Fully responsive (mobile, tablet, desktop)
- 🖱️ Custom animated cursor

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
gamerstour/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css          # Global styles & CSS variables
    ├── data/
    │   └── games.js       # Game data
    └── components/
        ├── Cursor.jsx / .module.css
        ├── Navbar.jsx / .module.css
        ├── Hero.jsx / .module.css
        ├── Ticker.jsx / .module.css
        ├── Games.jsx / .module.css
        ├── Tournaments.jsx / .module.css
        ├── Leaderboard.jsx / .module.css
        ├── Features.jsx / .module.css
        ├── Newsletter.jsx / .module.css
        └── Footer.jsx / .module.css
```
