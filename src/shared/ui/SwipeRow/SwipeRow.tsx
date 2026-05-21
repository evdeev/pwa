import type { PointerEvent, PropsWithChildren } from 'react'
import { useRef, useState } from 'react'

import styles from './SwipeRow.module.scss'

const ACTION_WIDTH = 96

export function SwipeRow({ children }: PropsWithChildren) {
  const [offset, setOffset] = useState(0)

  const startX = useRef(0)
  const dragging = useRef(false)

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    dragging.current = true
    startX.current = event.clientX
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return

    const delta = event.clientX - startX.current

    if (delta >= 0) {
      setOffset(0)
      return
    }

    const limited = Math.max(delta, -ACTION_WIDTH - 24)

    if (limited < -ACTION_WIDTH) {
      const extra = limited + ACTION_WIDTH
      setOffset(-ACTION_WIDTH + extra * 0.35)
      return
    }

    setOffset(limited)
  }

  function handlePointerEnd() {
    dragging.current = false

    if (offset < -56) {
      setOffset(-ACTION_WIDTH)
      return
    }

    setOffset(0)
  }

  return (
    <div className={styles.row}>
      <div className={styles.actions}>
        <div className={styles.deleteAction}>Удалить</div>
      </div>

      <div
        className={styles.content}
        style={{ transform: `translateX(${offset}px)` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        {children}
      </div>
    </div>
  )
}
