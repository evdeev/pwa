import type { PointerEvent, PropsWithChildren } from 'react'
import { useEffect, useRef, useState } from 'react'

import styles from './SwipeRow.module.scss'

const ACTION_WIDTH = 92
const SWIPE_THRESHOLD = 6
const HORIZONTAL_RATIO = 0.55

let activeSwipeId: string | null = null
let bodyScrollLocked = false

function createSwipeId() {
  return Math.random().toString(36).slice(2)
}

function lockBodyScroll() {
  if (bodyScrollLocked) {
    return
  }

  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'

  bodyScrollLocked = true
}

function unlockBodyScroll() {
  if (!bodyScrollLocked) {
    return
  }

  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''

  bodyScrollLocked = false
}

type SwipeRowProps = PropsWithChildren<{
  position?: 'first' | 'middle' | 'last' | 'single'
}>

export function SwipeRow({
  children,
  position = 'middle',
}: SwipeRowProps) {
  const [offset, setOffset] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const rowId = useRef(createSwipeId())
  const rowElement = useRef<HTMLDivElement | null>(null)
  const contentElement = useRef<HTMLDivElement | null>(null)

  const startX = useRef(0)
  const startY = useRef(0)
  const dragging = useRef(false)
  const swipeActive = useRef(false)
  const gestureLocked = useRef<'horizontal' | 'vertical' | null>(null)

  useEffect(() => {
    function closeCurrentRow() {
      if (activeSwipeId === rowId.current) {
        activeSwipeId = null
      }

      unlockBodyScroll()

      setOffset(0)
      setRevealed(false)
    }

    function handleCloseSwipe(event: Event) {
      const customEvent = event as CustomEvent<string>

      if (customEvent.detail === rowId.current) {
        return
      }

      closeCurrentRow()
    }

    function handleGlobalPointerDown(event: globalThis.PointerEvent) {
      if (!revealed) {
        return
      }

      const target = event.target as Node

      if (rowElement.current?.contains(target)) {
        return
      }

      closeCurrentRow()
    }

    function handleScroll() {
      if (!revealed) {
        return
      }

      closeCurrentRow()
    }

    window.addEventListener('swipe-row-opened', handleCloseSwipe)
    window.addEventListener('pointerdown', handleGlobalPointerDown)
    window.addEventListener('scroll', handleScroll, true)

    return () => {
      unlockBodyScroll()

      window.removeEventListener('swipe-row-opened', handleCloseSwipe)
      window.removeEventListener('pointerdown', handleGlobalPointerDown)
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [revealed])

  function revealCurrentRow() {
    activeSwipeId = rowId.current

    window.dispatchEvent(
      new CustomEvent('swipe-row-opened', {
        detail: rowId.current,
      }),
    )
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    dragging.current = true
    swipeActive.current = false
    gestureLocked.current = null

    if (activeSwipeId && activeSwipeId !== rowId.current) {
      window.dispatchEvent(
        new CustomEvent('swipe-row-opened', {
          detail: rowId.current,
        }),
      )
    }

    startX.current = event.clientX
    startY.current = event.clientY
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return

    const deltaX = event.clientX - startX.current
    const deltaY = event.clientY - startY.current

    if (!gestureLocked.current) {
      const absX = Math.abs(deltaX)
      const absY = Math.abs(deltaY)

      if (absX < SWIPE_THRESHOLD && absY < SWIPE_THRESHOLD) {
        return
      }

      if (absX > absY * HORIZONTAL_RATIO) {
        gestureLocked.current = 'horizontal'
        swipeActive.current = true

        lockBodyScroll()

        contentElement.current?.setPointerCapture(event.pointerId)

        setRevealed(true)
        revealCurrentRow()
      } else {
        gestureLocked.current = 'vertical'
        return
      }
    }

    if (gestureLocked.current !== 'horizontal') {
      return
    }

    event.preventDefault()
    event.stopPropagation()

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

  function handlePointerEnd(event: PointerEvent<HTMLDivElement>) {
    dragging.current = false

    unlockBodyScroll()

    if (gestureLocked.current === 'horizontal') {
      try {
        contentElement.current?.releasePointerCapture(event.pointerId)
      } catch {
        // noop
      }
    }

    if (!swipeActive.current) {
      setOffset(0)
      setRevealed(false)
      return
    }

    if (offset < -44) {
      setOffset(-ACTION_WIDTH)
      revealCurrentRow()
      return
    }

    if (activeSwipeId === rowId.current) {
      activeSwipeId = null
    }

    setOffset(0)
    setRevealed(false)
  }

  const radiusClass = styles[position]

  return (
    <div
      ref={rowElement}
      className={`${styles.row} ${revealed ? styles.rowRevealed : ''} ${radiusClass}`}
    >
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
        ref={contentElement}
        className={offset !== 0 ? `${styles.content} ${styles.revealed}` : styles.content}
        style={{ transform: `translate3d(${offset}px, 0, 0)` }}
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
