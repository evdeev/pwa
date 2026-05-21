import type { SessionSummary } from '../../../entities/session/types'

import { IOSList } from '../../../shared/ui/IOSList/IOSList'
import { SwipeRow } from '../../../shared/ui/SwipeRow/SwipeRow'

import { SessionCard } from './SessionCard'

import styles from './SessionGroup.module.scss'

interface SessionGroupProps {
  sessions: SessionSummary[]
}

export function SessionGroup({ sessions }: SessionGroupProps) {
  return (
    <IOSList>
      {sessions.map((session, index) => (
        <div key={session.id}>
          <SwipeRow>
            <SessionCard session={session} />
          </SwipeRow>

          {index !== sessions.length - 1 && <div className={styles.divider} />}
        </div>
      ))}
    </IOSList>
  )
}
