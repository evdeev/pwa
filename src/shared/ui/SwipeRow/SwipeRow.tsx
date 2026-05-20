import type { PropsWithChildren } from 'react'

import styles from './SwipeRow.module.scss'

export function SwipeRow({ children }: PropsWithChildren) {
  return <div className={styles.row}>{children}</div>
}
