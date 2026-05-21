import { PageLayout } from '../../../shared/layouts/PageLayout/PageLayout'

import {
  aprilSessions,
  marchSessions,
  maySessions
} from '../../../entities/session/testData'

import { SessionGroup } from '../../sessions/ui/SessionGroup'

export function HistoryPage() {
  return (
    <PageLayout>
      <section style={{ display: 'grid', gap: '10px' }}>
        <div style={{ color: '#6e6e73', fontSize: '14px', fontWeight: 700, letterSpacing: '-0.2px' }}>
          МАЙ 2026
        </div>

        <SessionGroup sessions={maySessions} />
      </section>

      <section style={{ display: 'grid', gap: '10px', marginTop: '28px' }}>
        <div style={{ color: '#6e6e73', fontSize: '14px', fontWeight: 700, letterSpacing: '-0.2px' }}>
          АПРЕЛЬ 2026
        </div>

        <SessionGroup sessions={aprilSessions} />
      </section>

      <section style={{ display: 'grid', gap: '10px', marginTop: '28px' }}>
        <div style={{ color: '#6e6e73', fontSize: '14px', fontWeight: 700, letterSpacing: '-0.2px' }}>
          МАРТ 2026
        </div>

        <SessionGroup sessions={marchSessions} />
      </section>
    </PageLayout>
  )
}
