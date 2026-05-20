import type { SessionSummary } from '../../../entities/session/types'

interface SessionCardProps {
  session: SessionSummary
}

export function SessionCard({ session }: SessionCardProps) {
  return (
    <button className="session-card" type="button">
      <div className="session-card__top">
        <div>
          <h2 className="session-card__title">{session.dateLabel}</h2>

          <p className="session-card__meta">
            {session.distanceMeters} м · WA 40 · {session.arrowsCount} стрел
          </p>
        </div>

        <div
          className="session-card__score"
          aria-label={`Результат ${session.score} из ${session.maxScore}`}
        >
          <strong>{session.score}</strong>
          <span>/{session.maxScore}</span>
        </div>
      </div>

      <div className="session-card__bottom">
        <div>Средний бал: {session.average.toFixed(2)}</div>

        <div className="session-card__competition">
          {session.type === 'competition' && (
            <div className="session-card__competition-icon" />
          )}

          <div className="session-card__chevron">›</div>
        </div>
      </div>
    </button>
  )
}
