import { useEffect, useRef } from 'react'
import styles from './Features.module.css'

const FEATURES = [
  { icon: '⚡', title: 'Zero-Lag Matchmaking', desc: 'Our AI-powered system matches you with opponents at your exact skill level in under 10 seconds, globally.' },
  { icon: '🏆', title: 'Instant Payouts', desc: 'Win and get paid within 24 hours. We support crypto, PayPal, and bank transfers to 90+ countries.' },
  { icon: '🛡️', title: 'Anti-Cheat Engine', desc: 'Our proprietary cheat detection ensures a 100% fair competitive environment for every match.' },
  { icon: '📊', title: 'Performance Analytics', desc: 'Deep stats, heatmaps, and AI-powered coaching insights to help you level up your game.' },
  { icon: '🌐', title: 'Global Network', desc: '56 server nodes across 6 continents. Always connect to a server under 20ms from anywhere.' },
  { icon: '🎙️', title: 'Live Spectator Mode', desc: 'Watch pro matches live with dynamic commentary, instant replays, and interactive overlays.' },
]

export default function Features() {
  const gridRef = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          import('animejs').then(({ animate, stagger }) => {
            animate('.feature-card', {
              opacity: [0, 1], scale: [0.9, 1],
              duration: 600, delay: stagger(80), ease: 'outBack(1.4)',
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
    <section id="features" className={styles.section}>
      <div className="section-header">
        <p className="section-label">// Why GamersTour</p>
        <h2 className="section-title">Built for <span>Champions</span></h2>
      </div>
      <div className={styles.grid} ref={gridRef}>
        {FEATURES.map(f => (
          <div key={f.title} className={`${styles.card} feature-card`} style={{ opacity: 0 }}>
            <div className={styles.icon}>{f.icon}</div>
            <div className={styles.title}>{f.title}</div>
            <p className={styles.desc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
