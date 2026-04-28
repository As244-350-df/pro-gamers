import { useEffect, useRef } from 'react'
import styles from './Tournaments.module.css'

const TOURNAMENTS = [
  {
    rank: '01', game: 'Grand Theft Auto V',
    name: 'GTA V Heist Masters Invitational 2025',
    tags: [{ label: '🔴 Live', type: 'live' }, { label: '512 Players' }, { label: 'Solo' }, { label: 'PC / Console' }],
    prize: '$50,000',
  },
  {
    rank: '02', game: 'Elden Ring',
    name: 'Shadow of the Erdtree Championship',
    tags: [{ label: '🔴 Live', type: 'live' }, { label: '256 Players' }, { label: 'Solo' }, { label: 'All Platforms' }],
    prize: '$35,000',
  },
  {
    rank: '03', game: 'Cyberpunk 2077',
    name: 'Night City Speedrun World Cup',
    tags: [{ label: 'Registration Open', type: 'open' }, { label: 'Unlimited' }, { label: 'Speedrun' }, { label: 'PC Only' }],
    prize: '$20,000',
  },
  {
    rank: '04', game: 'God of War: Ragnarök',
    name: 'Valhalla Boss Rush Challenge Series',
    tags: [{ label: 'Registration Open', type: 'open' }, { label: '128 Players' }, { label: 'Teams' }, { label: 'PS4 / PS5' }],
    prize: '$15,000',
  },
  {
    rank: '05', game: "Spider-Man: Miles Morales",
    name: 'Miles Morales Swing-Time World Tour',
    tags: [{ label: 'Starts in 3h' }, { label: '200 Players' }, { label: 'Time Trial' }, { label: 'PC / PS5' }],
    prize: '$12,000',
  },
]

export default function Tournaments() {
  const gridRef = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          import('animejs').then(({ animate, stagger }) => {
            animate('.tournament-card', {
              opacity: [0, 1], translateX: [-40, 0],
              duration: 700, delay: stagger(100), ease: 'outExpo',
            })
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tournaments" className={styles.section}>
      <div className="section-header">
        <p className="section-label">// Active Events</p>
        <h2 className="section-title">Live <span>Tournaments</span></h2>
        <p className="section-sub">Compete for massive prize pools across all game genres.</p>
      </div>
      <div className={styles.grid} ref={gridRef}>
        {TOURNAMENTS.map(t => (
          <div key={t.rank} className={`${styles.card} tournament-card`} style={{ opacity: 0 }}>
            <div className={styles.rank}>{t.rank}</div>
            <div className={styles.info}>
              <div className={styles.game}>{t.game}</div>
              <div className={styles.name}>{t.name}</div>
              <div className={styles.tags}>
                {t.tags.map((tag, i) => (
                  <span key={i} className={`${styles.tag} ${tag.type === 'live' ? styles.tagLive : tag.type === 'open' ? styles.tagOpen : ''}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.prize}>
              <div className={styles.prizeAmount}>{t.prize}</div>
              <div className={styles.prizeLabel}>Prize Pool</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
