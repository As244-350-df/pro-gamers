import { useEffect, useRef } from 'react'
import { GAMES } from '../data/games'
import styles from './Games.module.css'

function GameCard({ game }) {
  const handleImgError = (e) => {
    e.target.style.display = 'none'
    e.target.parentNode.style.background = game.fallbackBg
  }

  return (
    <div className={`${styles.card} game-card`}>
      <div className={styles.imgWrap}>
        <img
          className={styles.img}
          src={game.img}
          alt={game.title}
          onError={handleImgError}
          loading="lazy"
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.info}>
        <div className={styles.genre}>{game.genre}</div>
        <div className={styles.title}>{game.title}</div>
        <div className={styles.meta}>
          <span className={styles.rating}>⭐ {game.rating}</span>
          <span className={styles.players}>🎮 {game.players}</span>
        </div>
        <div className={`${styles.tag} ${game.tagColor === 'live' ? styles.tagLive : ''}`}>
          {game.tag}
        </div>
      </div>
    </div>
  )
}

export default function Games() {
  const sectionRef = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          import('animejs').then(({ animate, stagger }) => {
            animate('.game-card', {
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 700,
              delay: stagger(80),
              ease: 'outExpo',
            })
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="games" className={styles.section}>
      <div className="section-header">
        <p className="section-label">// Featured Games</p>
        <h2 className="section-title">Top <span>Competitive</span> Titles</h2>
        <p className="section-sub">Battle-tested games with massive prize pools and active global communities.</p>
      </div>
      <div className={styles.grid} ref={sectionRef}>
        {GAMES.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  )
}
