import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      const { mx, my } = pos.current
      pos.current.rx += (mx - pos.current.rx) * 0.12
      pos.current.ry += (my - pos.current.ry) * 0.12
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.current.rx}px, ${pos.current.ry}px) translate(-50%, -50%)`
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    const addHover = () => {
      document.querySelectorAll('a, button, .game-card, .tournament-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
          if (ringRef.current) ringRef.current.classList.add(styles.ringHover)
        })
        el.addEventListener('mouseleave', () => {
          if (ringRef.current) ringRef.current.classList.remove(styles.ringHover)
        })
      })
    }
    setTimeout(addHover, 500)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}
