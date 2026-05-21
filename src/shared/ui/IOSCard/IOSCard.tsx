import type { PropsWithChildren } from 'react'

import styles from './IOSCard.module.scss'

interface IOSCardProps extends PropsWithChildren {
  padded?: boolean
}

export function IOSCard({ padded = true, children }: IOSCardProps) {
  return (
    <div className={padded ? styles.paddedCard : styles.card}>
      {children}
    </div>
  )
}
