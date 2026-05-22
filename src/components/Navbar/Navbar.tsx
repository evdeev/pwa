import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'

import styles from './Navbar.module.scss'

interface NavbarProps {
  title: string
}

const COLLAPSE_DISTANCE = 96

export function Navbar({ title }: NavbarProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let animationFrame = 0

    function updateProgress() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY
      const nextProgress = Math.min(Math.max(scrollTop / COLLAPSE_DISTANCE, 0), 1)

      setProgress(nextProgress)
    }

    function handleScroll() {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(updateProgress)
    }

    updateProgress()

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll)
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
