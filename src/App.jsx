import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Games from './components/Games'
import Tournaments from './components/Tournaments'
import Leaderboard from './components/Leaderboard'
import Features from './components/Features'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Games />
        <Tournaments />
        <Leaderboard />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
