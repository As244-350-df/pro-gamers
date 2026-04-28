import styles from './Ticker.module.css'

const items = [
  'GTA V Tournament – $50,000 Prize',
  'Elden Ring Championship – LIVE NOW',
  'Cyberpunk 2077 Speedrun – New Record',
  'Red Dead Online Showdown – Registration Open',
  'Spider-Man Miles Morales Cup – Starts in 3h',
  'Hogwarts Legacy Challenge – $25,000',
  'God of War Boss Rush – Registrations Open',
  'The Witcher 3 Lore Master Cup – $10,000',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
