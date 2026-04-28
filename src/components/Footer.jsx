import styles from './Footer.module.css'

const NAV = {
  Platform: ['Games', 'Tournaments', 'Leaderboard', 'Live Streams', 'Coaching'],
  Company: ['About Us', 'Careers', 'Press Kit', 'Partners', 'Blog'],
  Support: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Anti-Cheat Policy'],
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>Gamers<span>Tour</span></a>
          <p>The world's most competitive gaming platform. Play, compete, and earn with millions of gamers worldwide.</p>
          <div className={styles.social}>
            {['𝕏', 'in', '▶', '📸'].map((icon, i) => (
              <a key={i} href="#" className={styles.socialBtn}>{icon}</a>
            ))}
          </div>
        </div>
        {Object.entries(NAV).map(([title, links]) => (
          <div key={title} className={styles.col}>
            <h4>{title}</h4>
            <ul>
              {links.map(link => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <p>© 2025 GamersTour. All rights reserved.</p>
        <p className={styles.status}>
          STATUS: <span>● ALL SYSTEMS OPERATIONAL</span>
        </p>
      </div>
    </footer>
  )
}
