import { SessionCard as SessionCardView } from '../../../components/SessionCard/SessionCard'
import type { SessionSummary } from '../../../entities/session/types'

interface SessionCardProps {
  session: SessionSummary
}

export function SessionCard({ session }: SessionCardProps) {
  return (
    <SessionCardView
      date={session.dateLabel}
      meta={`${session.distanceMeters} м · WA 40 · ${session.arrowsCount} стрел`}
      score={`${session.score}/${session.maxScore}`}
      average={`среднее ${session.average.toFixed(2)}`}
      isCompetition={session.type === 'competition'}
    />
  )
}
