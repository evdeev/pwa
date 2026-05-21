import type { PropsWithChildren } from 'react'

import styles from './PageSection.module.scss'

interface PageSectionProps extends PropsWithChildren {
  title: string
  compact?: boolean
}

export function PageSection({ title, compact = false, children }: PageSectionProps) {
  return (
    <section className={compact ? styles.compactSection : styles.section}>
      <div className={styles.title}>{title}</div>

      <div className={styles.content}>{children}</div>
    </section>
  )
}
