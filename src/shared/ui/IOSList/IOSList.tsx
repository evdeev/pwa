import type { PropsWithChildren } from 'react'

import styles from './IOSList.module.scss'

export function IOSList({ children }: PropsWithChildren) {
  return <div className={styles.list}>{children}</div>
}
