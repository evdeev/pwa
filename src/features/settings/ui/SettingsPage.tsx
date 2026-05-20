import { appConfig } from '../../../app/config'

import { PageLayout } from '../../../shared/layouts/PageLayout/PageLayout'
import { Card } from '../../../shared/ui/Card/Card'
import { ListCell } from '../../../components/ListCell/ListCell'

export function SettingsPage() {
  return (
    <PageLayout sectionTitle="НАСТРОЙКИ">
      <Card>
        <ListCell label="Приложение" value={appConfig.shortName} />
        <ListCell label="Версия" value={appConfig.version} />
        <ListCell label="Режим" value="PWA" />
      </Card>
    </PageLayout>
  )
}
