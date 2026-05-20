import type { SessionSummary } from '../../../entities/session/types'

interface SessionCardProps {
  session: SessionSummary
}

export function SessionCard({ session }: SessionCardProps) {
  return (
    <button className="session-card" type="button">
      <div className="session-card__top">
        <div>
          <h2 className="session-card__title">{session.title}</h2>
          <p className="session-card__meta">
            {session.dateLabel} · {session.distanceMeters} м · {session.arrowsCount} стрел
          </p>
        </div>

        <div className="session-card__score" aria-label={`Результат ${session.score} из ${session.maxScore}`}>
          <strong>{session.score}</strong>
          <span>/{session.maxScore}</span>
        </div>
      </div>

      <div className="session-card__bottom">
        <span>Средний бал: {session.average.toFixed(2)}</span>
        {session.type === 'competition' ? (
          <span className="session-card__badge">
            <span className="session-card__badge-dot" />
            Соревнование
          </span>
        ) : (
          <span>Тренировка</span>
        )}
      </div>
    </button>
  )
}
