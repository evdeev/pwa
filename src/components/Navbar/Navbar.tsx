import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'

import styles from './Navbar.module.scss'

interface NavbarProps {
  title: string
}

const COLLAPSE_DISTANCE = 72

export function Navbar({ title }: NavbarProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let animationFrame = 0

    function updateProgress() {
      const nextProgress = Math.min(window.scrollY / COLLAPSE_DISTANCE, 1)
      setProgress(nextProgress)
    }

    function handleScroll() {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(updateProgress)
    }

    updateProgress()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={styles.navbar}
      style={{ '--collapse-progress': progress } as CSSProperties}
    >
      <div className={styles.compactTitle}>{title}</div>
      <div className={styles.largeTitle}>{title}</div>
    </header>
  )
}
