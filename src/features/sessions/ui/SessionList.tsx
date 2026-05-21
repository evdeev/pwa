import type { SessionSummary } from '../../../entities/session/types'

import { SwipeRow } from '../../../shared/ui/SwipeRow/SwipeRow'
import { SessionCard } from './SessionCard'

interface SessionListProps {
  sessions: SessionSummary[]
}

export function SessionList({ sessions }: SessionListProps) {
  return (
    <div style={{ display: 'grid', gap: '12px' }}>
      {sessions.map((session) => (
        <SwipeRow key={session.id}>
          <SessionCard session={session} />
        </SwipeRow>
      ))}
    </div>
  )
}
