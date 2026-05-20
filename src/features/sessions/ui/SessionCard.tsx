import type { SessionSummary } from '../../../entities/session/types'

interface SessionCardProps {
  session: SessionSummary
}

export function SessionCard({ session }: SessionCardProps) {
  return (
    <button className="session-card" type="button">
      <div className="session-card__top">
        <div>
          <div className="session-card__title-row">
            <h2 className="session-card__title">{session.dateLabel}</h2>

            {session.type === 'competition' && (
              <div className="session-card__competition-medal">🏆</div>
            )}
          </div>

          <p className="session-card__meta">
            {session.distanceMeters} м · WA 40 · {session.arrowsCount} стрел
          </p>
        </div>

        <div className="session-card__score-wrapper">
          <div
            className="session-card__score"
            aria-label={`Результат ${session.score} из ${session.maxScore}`}
          >
            <strong>{session.score}</strong>
            <span>/{session.maxScore}</span>
          </div>

          <div className="session-card__average">
            среднее {session.average.toFixed(2)}
          </div>
        </div>

        <div className="session-card__chevron">›</div>
      </div>
    </button>
  )
}
