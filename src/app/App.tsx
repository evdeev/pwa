import { useMemo, useState } from 'react'

import { Navbar } from '../components/Navbar/Navbar'
import { TabBar } from '../components/TabBar/TabBar'
import { ChartIcon, ClockIcon, GearIcon } from '../shared/icons'
import { HistoryPage } from '../pages/HistoryPage'
import { StatisticsPage } from '../pages/StatisticsPage'
import { SettingsPage } from '../pages/SettingsPage'
import { appConfig } from './config'
import type { AppTab } from './types'

const tabs = [
  {
    id: 'history' as AppTab,
    label: 'История',
    icon: <ClockIcon />
  },
  {
    id: 'statistics' as AppTab,
    label: 'Статистика',
    icon: <ChartIcon />
  },
  {
    id: 'settings' as AppTab,
    label: 'Настройки',
    icon: <GearIcon />
  }
]

export function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('history')

  const title = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTab)?.label ?? 'История'
  }, [activeTab])

  return (
    <div className="app-shell">
      <Navbar title={title} />

      <main className="app-content">
        {activeTab === 'history' && <HistoryPage />}
        {activeTab === 'statistics' && <StatisticsPage />}
        {activeTab === 'settings' && <SettingsPage />}
      </main>

      <div className="version-pill">v{appConfig.version}</div>

      <TabBar
        items={tabs}
        activeTab={activeTab}
        onChange={(tab) => setActiveTab(tab as AppTab)}
      />
    </div>
  )
}
