import { useEffect, useRef } from 'react'
import styles from './Leaderboard.module.css'

const PLAYERS = [
  { rank: '01', rankClass: 'gold', name: 'ZeroX_Alpha', country: '🇺🇸 United States', score: '998,412', wins: '347W / 12L', winRate: 97, initials: 'ZX', avatarGrad: 'linear-gradient(135deg,#00ff88,#00d4ff)' },
  { rank: '02', rankClass: 'silver', name: 'NightKing_Pro', country: '🇰🇷 South Korea', score: '987,055', wins: '312W / 18L', winRate: 94, initials: 'NK', avatarGrad: 'linear-gradient(135deg,#c0c0c0,#808080)' },
  { rank: '03', rankClass: 'bronze', name: 'ShadowBlade99', country: '🇧🇷 Brazil', score: '971,330', wins: '298W / 22L', winRate: 90, initials: 'SB', avatarGrad: 'linear-gradient(135deg,#cd7f32,#8B4513)' },
  { rank: '04', rankClass: '', name: 'GhostHunter_VII', country: '🇬🇧 United Kingdom', score: '955,700', wins: '280W / 28L', winRate: 85, initials: 'GH', avatarGrad: 'linear-gradient(135deg,#ff2d55,#b200ff)' },
  { rank: '05', rankClass: '', name: 'VortexStrike', country: '🇩🇪 Germany', score: '940,120', wins: '265W / 35L', winRate: 80, initials: 'VX', avatarGrad: 'linear-gradient(135deg,#00d4ff,#0066ff)' },
  { rank: '06', rankClass: '', name: 'CyberTitan_EX', country: '🇯🇵 Japan', score: '920,875', wins: '241W / 40L', winRate: 75, initials: 'CT', avatarGrad: 'linear-gradient(135deg,#ff8c00,#ff4500)' },
]

export default function Leaderboard() {
  const tbodyRef = useRef(null)
  const barRefs = useRef([])
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          import('animejs').then(({ animate, stagger }) => {
            animate('.lb-row', {
              opacity: [0, 1], translateX: [30, 0],
              duration: 600, delay: stagger(80), ease: 'outExpo',
            })
            setTimeout(() => {
              barRefs.current.forEach((bar, i) => {
                if (bar) bar.style.width = PLAYERS[i].winRate + '%'
              })
            }, 600)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (tbodyRef.current) observer.observe(tbodyRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="leaderboard" className={styles.section}>
      <div className="section-header">
        <p className="section-label">// Global Rankings</p>
        <h2 className="section-title">World <span>Leaderboard</span></h2>
        <p className="section-sub">Top-ranked players competing globally across all game categories.</p>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th><th>Player</th><th>Score</th><th className={styles.hideSmall}>Wins</th><th className={styles.hideMobile}>Win Rate</th>
            </tr>
          </thead>
          <tbody ref={tbodyRef}>
            {PLAYERS.map((p, i) => (
              <tr key={p.name} className={`${styles.row} lb-row`} style={{ opacity: 0 }}>
                <td>
                  <span className={`${styles.rank} ${p.rankClass === 'gold' ? styles.gold : p.rankClass === 'silver' ? styles.silver : p.rankClass === 'bronze' ? styles.bronze : ''}`}>
                    {p.rank}
                  </span>
                </td>
                <td>
                  <div className={styles.player}>
                    <div className={styles.avatar} style={{ background: p.avatarGrad }}>{p.initials}</div>
                    <div>
                      <div className={styles.name}>{p.name}</div>
                      <div className={styles.country}>{p.country}</div>
                    </div>
                  </div>
                </td>
                <td><span className={styles.score}>{p.score}</span></td>
                <td className={styles.hideSmall}><span className={styles.wins}>{p.wins}</span></td>
                <td className={styles.hideMobile}>
                  <div className={styles.barWrap}>
                    <div className={styles.bar} ref={el => (barRefs.current[i] = el)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
