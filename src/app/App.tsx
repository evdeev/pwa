import { useMemo, useState } from 'react'

import styles from './App.module.scss'

import { Navbar } from '../components/Navbar/Navbar'
import { TabBar } from '../components/TabBar/TabBar'
import { ChartIcon, ClockIcon, GearIcon } from '../shared/icons'
import { HistoryPage } from '../pages/HistoryPage'
import { StatisticsPage } from '../pages/StatisticsPage'
import { SettingsPage } from '../pages/SettingsPage'
import { SafeArea } from '../shared/ui/SafeArea/SafeArea'
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
    <div className={styles.appShell}>
      <Navbar title={title} />
      <div className={styles.navbarSentinel} data-navbar-sentinel />

      <SafeArea withTabBarInset>
        <main className={styles.appContent}>
          {activeTab === 'history' && <HistoryPage />}
          {activeTab === 'statistics' && <StatisticsPage />}
          {activeTab === 'settings' && <SettingsPage />}
        </main>
      </SafeArea>

      <div className={styles.versionPill}>v{appConfig.version}</div>

      <TabBar
        items={tabs}
        activeTab={activeTab}
        onChange={(tab) => setActiveTab(tab as AppTab)}
      />
    </div>
  )
}
