import type { PropsWithChildren, ReactNode } from 'react'

import styles from './IOSCell.module.scss'

interface IOSCellProps extends PropsWithChildren {
  before?: ReactNode
  after?: ReactNode
  interactive?: boolean
}

export function IOSCell({
  before,
  after,
  interactive = false,
  children
}: IOSCellProps) {
  return (
    <div className={interactive ? styles.interactiveCell : styles.cell}>
      {before && <div className={styles.before}>{before}</div>}

      <div className={styles.content}>{children}</div>

      {after && <div className={styles.after}>{after}</div>}
    </div>
  )
}
