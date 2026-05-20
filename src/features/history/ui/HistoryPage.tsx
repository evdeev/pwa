import { PageLayout } from '../../../shared/layouts/PageLayout/PageLayout'

import { testSessions } from '../../../entities/session/testData'
import { SessionList } from '../../sessions/ui/SessionList'

export function HistoryPage() {
  return (
    <PageLayout sectionTitle="МАЙ 2026">
      <SessionList sessions={testSessions} />
    </PageLayout>
  )
}
