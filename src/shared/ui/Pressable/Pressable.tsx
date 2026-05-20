import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import styles from './Pressable.module.scss'

interface PressableProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export function Pressable({ children, className = '', ...props }: PressableProps) {
  return (
    <button
      {...props}
      className={`${styles.pressable} ${className}`.trim()}
    >
      {children}
    </button>
  )
}
