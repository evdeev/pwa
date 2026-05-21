import type { ReactNode } from 'react'

import styles from './SectionHeader.module.scss'

interface SectionHeaderProps {
  children: ReactNode
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return <div className={styles.header}>{children}</div>
}
