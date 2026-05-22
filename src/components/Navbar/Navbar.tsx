import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'

import styles from './Navbar.module.scss'

interface NavbarProps {
  title: string
}

export function Navbar({ title }: NavbarProps) {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const sentinel = document.querySelector('[data-navbar-sentinel]')

    if (!sentinel) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setCollapsed(!entry.isIntersecting)
      },
      {
        threshold: 0,
      },
    )

    observer.observe(sentinel)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={`${styles.navbar} ${collapsed ? styles.collapsed : ''}`}
      style={{ '--collapse-progress': collapsed ? 1 : 0 } as CSSProperties}
    >
      <div className={styles.compactTitle}>{title}</div>
      <div className={styles.largeTitle}>{title}</div>
    </header>
  )
}
