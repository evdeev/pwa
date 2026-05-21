import type { ButtonHTMLAttributes, ReactNode } from 'react'

import styles from './FloatingActionButton.module.scss'

interface FloatingActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
}

export function FloatingActionButton({
  icon,
  className,
  ...props
}: FloatingActionButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className={className ? `${styles.button} ${className}` : styles.button}
    >
      <span className={styles.icon}>{icon}</span>
    </button>
  )
}
