import { PageLayout } from '../../../shared/layouts/PageLayout/PageLayout'
import { FloatingActionButton } from '../../../shared/ui/FloatingActionButton/FloatingActionButton'
import { PlusIcon } from '../../../shared/ui/FloatingActionButton/PlusIcon'
import { PageSection } from '../../../shared/ui/PageSection/PageSection'

import {
  aprilSessions,
  marchSessions,
  maySessions
} from '../../../entities/session/testData'

import { SessionGroup } from '../../sessions/ui/SessionGroup'

export function HistoryPage() {
  return (
    <>
      <PageLayout>
        <PageSection title="МАЙ 2026" compact>
          <SessionGroup sessions={maySessions} />
        </PageSection>

        <PageSection title="АПРЕЛЬ 2026">
          <SessionGroup sessions={aprilSessions} />
        </PageSection>

        <PageSection title="МАРТ 2026">
          <SessionGroup sessions={marchSessions} />
        </PageSection>
      </PageLayout>

      <FloatingActionButton aria-label="Добавить тренировку" icon={<PlusIcon />} />
    </>
  )
}
