import type { PropsWithChildren } from 'react'

import { SectionHeader } from '../SectionHeader/SectionHeader'

import styles from './PageSection.module.scss'

interface PageSectionProps extends PropsWithChildren {
  title: string
  compact?: boolean
}

export function PageSection({ title, compact = false, children }: PageSectionProps) {
  return (
    <section className={compact ? styles.compactSection : styles.section}>
      <SectionHeader>{title}</SectionHeader>

      <div className={styles.content}>{children}</div>
    </section>
  )
}
