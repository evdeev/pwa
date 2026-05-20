import type { SessionSummary } from '../../../entities/session/types'
import { SessionCard } from './SessionCard'

interface SessionListProps {
  sessions: SessionSummary[]
}

export function SessionList({ sessions }: SessionListProps) {
  return (
    <div className="session-list">
      {sessions.map((session) => (
        <SessionCard key={session.id} session={session} />
      ))}
    </div>
  )
}
