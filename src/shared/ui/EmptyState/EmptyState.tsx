import type { ReactNode } from 'react'

import styles from './EmptyState.module.scss'

interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
}

export function EmptyState({
  icon,
  title,
  description
}: EmptyStateProps) {
  return (
    <div className={styles.state}>
      {icon && <div className={styles.icon}>{icon}</div>}

      <div className={styles.title}>{title}</div>

      {description && <div className={styles.description}>{description}</div>}
    </div>
  )
}
