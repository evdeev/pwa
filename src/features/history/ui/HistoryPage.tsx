import styles from './HistoryPage.module.scss'

import { testSessions } from '../../../entities/session/testData'
import { SessionList } from '../../sessions/ui/SessionList'

export function HistoryPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <div className={styles.monthHeader}>МАЙ 2026</div>

        <SessionList sessions={testSessions} />
      </section>
    </div>
  )
}
