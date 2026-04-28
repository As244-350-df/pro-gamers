import { useState } from 'react'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section id="newsletter" className={styles.section}>
      <div className={styles.box}>
        <p className="section-label" style={{ textAlign: 'center' }}>// Stay in the Game</p>
        <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2rem' }}>
          Get <span>Tournament Alerts</span>
        </h2>
        <p className={styles.sub}>Be the first to know when new tournaments go live. No spam, ever.</p>

        {submitted ? (
          <div className={styles.success}>
            ✅ You're in! We'll notify you of upcoming tournaments.
          </div>
        ) : (
          <div className={styles.form}>
            <input
              type="email"
              className={styles.input}
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            />
            <button className="btn-primary" onClick={handleSubmit}>
              Subscribe
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
