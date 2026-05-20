import { testSessions } from '../entities/session/testData'
import { SessionList } from '../features/sessions/ui/SessionList'

export function HistoryPage() {
  return (
    <section className="page-section" aria-label="История тренировок">
      <div className="month-header">Май 2026</div>
      <SessionList sessions={testSessions} />
    </section>
  )
}
