import styles from './StatisticsPage.module.scss'

import { PageLayout } from '../../../shared/layouts/PageLayout/PageLayout'

export function StatisticsPage() {
  return (
    <PageLayout sectionTitle="СТАТИСТИКА">
      <div className={styles.chartPlaceholder} />
    </PageLayout>
  )
}
