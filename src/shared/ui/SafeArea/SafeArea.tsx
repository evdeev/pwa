import type { PropsWithChildren } from 'react'

import styles from './SafeArea.module.scss'

interface SafeAreaProps extends PropsWithChildren {
  withTabBarInset?: boolean
}

export function SafeArea({
  withTabBarInset = false,
  children
}: SafeAreaProps) {
  return (
    <div className={withTabBarInset ? styles.withTabBarInset : styles.safeArea}>
      {children}
    </div>
  )
}
