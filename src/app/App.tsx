import { useMemo, useState } from 'react'
import type { UIEvent } from 'react'

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

const COLLAPSE_DISTANCE = 96

export function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('history')
  const [navbarProgress, setNavbarProgress] = useState(0)

  const title = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTab)?.label ?? 'История'
  }, [activeTab])

  function handleAppScroll(event: UIEvent<HTMLDivElement>) {
    const scrollTop = event.currentTarget.scrollTop
    const nextProgress = Math.min(Math.max(scrollTop / COLLAPSE_DISTANCE, 0), 1)

    setNavbarProgress(nextProgress)
  }

  return (
    <div className={styles.appShell}>
      <div className={styles.appScroll} onScroll={handleAppScroll}>
        <Navbar title={title} progress={navbarProgress} />

        <SafeArea withTabBarInset>
          <main className={styles.appContent}>
            {activeTab === 'history' && <HistoryPage />}
            {activeTab === 'statistics' && <StatisticsPage />}
            {activeTab === 'settings' && <SettingsPage />}
          </main>
        </SafeArea>
      </div>

      <div className={styles.versionPill}>v{appConfig.version}</div>

      <TabBar
        items={tabs}
        activeTab={activeTab}
        onChange={(tab) => setActiveTab(tab as AppTab)}
      />
    </div>
  )
}
