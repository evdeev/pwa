import type { CSSProperties } from 'react'

import styles from './Navbar.module.scss'

interface NavbarProps {
  title: string
  progress: number
}

export function Navbar({ title, progress }: NavbarProps) {
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
