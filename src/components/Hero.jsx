import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const STATS = [
  { target: 4.2, suffix: 'M+', label: 'Million Players', float: true },
  { target: 1800, suffix: '+', label: 'Active Tournaments', float: false },
  { target: 94, suffix: '', label: 'Countries', float: false },
  { target: 50, suffix: 'M+', label: 'Prize Pool $', float: false },
]

export default function Hero() {
  const badgeRef = useRef(null)
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const actionsRef = useRef(null)
  const statsRef = useRef(null)
  const particlesRef = useRef(null)
  const counterRefs = useRef([])

  useEffect(() => {
    let animLib
    import('animejs').then(({ animate, stagger }) => {
      animLib = { animate, stagger }

      animate(badgeRef.current,   { opacity: [0, 1], translateY: [20, 0], duration: 800, ease: 'outExpo', delay: 300 })
      animate(titleRef.current,   { opacity: [0, 1], translateY: [60, 0], duration: 1000, ease: 'outExpo', delay: 500 })
      animate(subRef.current,     { opacity: [0, 1], translateY: [30, 0], duration: 800, ease: 'outExpo', delay: 800 })
      animate(actionsRef.current, { opacity: [0, 1], translateY: [20, 0], duration: 800, ease: 'outExpo', delay: 1000 })
      animate(statsRef.current,   { opacity: [0, 1], translateY: [30, 0], duration: 800, ease: 'outExpo', delay: 1200 })

      // Particles
      if (particlesRef.current) {
        const particles = particlesRef.current.querySelectorAll('.' + styles.particle)
        animate(particles, {
          opacity: [0, 1, 0],
          translateY: { from: '0px', to: () => `-${30 + Math.random() * 80}px` },
          translateX: { from: '0px', to: () => `${(Math.random() - 0.5) * 40}px` },
          scale: [0, 1.5, 0],
          duration: () => 2000 + Math.random() * 3000,
          delay: stagger(100),
          loop: true,
          ease: 'inOutSine',
        })
      }
    })

    // Stat counters
    setTimeout(() => {
      STATS.forEach((stat, i) => {
        const el = counterRefs.current[i]
        if (!el) return
        let current = 0
        const step = stat.target / 80
        const interval = setInterval(() => {
          current = Math.min(current + step, stat.target)
          el.textContent = stat.float
            ? current.toFixed(1) + stat.suffix
            : Math.floor(current) + stat.suffix
          if (current >= stat.target) clearInterval(interval)
        }, 20)
      })
    }, 1300)

    // Glitch
    const glitchInterval = setInterval(() => {
      if (titleRef.current) {
        titleRef.current.style.textShadow = '2px 0 #ff2d55, -2px 0 #00d4ff'
        setTimeout(() => { if (titleRef.current) titleRef.current.style.textShadow = 'none' }, 80)
      }
    }, 4000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      {/* Particles */}
      <div className={styles.particles} ref={particlesRef}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className={styles.content}>
        <div ref={badgeRef} className={styles.badge} style={{ opacity: 0 }}>
          🎮 World's #1 Gaming Platform
        </div>

        <h1 ref={titleRef} className={styles.title} style={{ opacity: 0 }}>
          <span className={styles.line1}>Compete.</span>
          <span className={styles.line2}>Dominate.</span>
        </h1>

        <p ref={subRef} className={styles.sub} style={{ opacity: 0 }}>
          Join millions of elite gamers. Compete in epic tournaments, track your rank,
          and climb to the top of the global leaderboard.
        </p>

        <div ref={actionsRef} className={styles.actions} style={{ opacity: 0 }}>
          <a href="#games" className="btn-primary">Start Playing</a>
          <a href="#tournaments" className="btn-outline">View Tournaments</a>
        </div>

        <div ref={statsRef} className={styles.stats} style={{ opacity: 0 }}>
          {STATS.map((s, i) => (
            <div key={s.label} className={styles.stat}>
              <div
                className={styles.statValue}
                ref={el => (counterRefs.current[i] = el)}
              >
                0
              </div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
