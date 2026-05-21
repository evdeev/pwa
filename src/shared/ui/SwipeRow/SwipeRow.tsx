import type { PointerEvent, PropsWithChildren } from 'react'
import { useRef, useState } from 'react'

import styles from './SwipeRow.module.scss'

const ACTION_WIDTH = 92
const SWIPE_THRESHOLD = 18

export function SwipeRow({ children }: PropsWithChildren) {
  const [offset, setOffset] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const startX = useRef(0)
  const startY = useRef(0)
  const dragging = useRef(false)
  const swipeActive = useRef(false)

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    dragging.current = true
    swipeActive.current = false

    startX.current = event.clientX
    startY.current = event.clientY
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return

    const deltaX = event.clientX - startX.current
    const deltaY = event.clientY - startY.current

    if (!swipeActive.current) {
      const horizontalIntent = Math.abs(deltaX) > SWIPE_THRESHOLD
      const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY)

      if (!horizontalIntent || !isHorizontal) {
        return
      }

      swipeActive.current = true
      setRevealed(true)
    }

    if (deltaX >= 0) {
      setOffset(0)
      return
    }

    const limited = Math.max(deltaX, -ACTION_WIDTH - 28)

    if (limited < -ACTION_WIDTH) {
      const extra = limited + ACTION_WIDTH
      setOffset(-ACTION_WIDTH + extra * 0.32)
      return
    }

    setOffset(limited)
  }

  function handlePointerEnd() {
    dragging.current = false

    if (!swipeActive.current) {
      setOffset(0)
      setRevealed(false)
      return
    }

    if (offset < -44) {
      setOffset(-ACTION_WIDTH)
      return
    }

    setOffset(0)
    setRevealed(false)
  }

  return (
    <div className={styles.row}>
      {revealed && (
        <div className={styles.actions}>
          <div className={styles.deleteAction}>
            <svg
              className={styles.deleteIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M19 6l-1 14H6L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
            </svg>
          </div>
        </div>
      )}

      <div
        className={offset !== 0 ? `${styles.content} ${styles.revealed}` : styles.content}
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
