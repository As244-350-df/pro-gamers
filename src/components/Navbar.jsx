import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Games', href: '#games' },
  { label: 'Tournaments', href: '#tournaments' },
  { label: 'Leaderboard', href: '#leaderboard' },
  { label: 'Features', href: '#features' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#" className={styles.logo}>
          Gamers<span>Tour</span>
        </a>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <button className={styles.cta} onClick={() => document.querySelector('#newsletter').scrollIntoView({ behavior: 'smooth' })}>
          Join Now
        </button>

        <button className={styles.hamburger} onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>✕</button>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="#newsletter" onClick={() => setMenuOpen(false)}>Join Now</a>
      </div>
    </>
  )
}
