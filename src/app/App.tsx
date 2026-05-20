import { useMemo, useState } from 'react'
import { HistoryPage } from '../pages/HistoryPage'
import { StatisticsPage } from '../pages/StatisticsPage'
import { SettingsPage } from '../pages/SettingsPage'
import { appConfig } from './config'
import type { AppTab } from './types'

const tabs: Array<{ id: AppTab; title: string; icon: string }> = [
  { id: 'history', title: 'История', icon: 'clock' },
  { id: 'statistics', title: 'Статистика', icon: 'chart' },
  { id: 'settings', title: 'Настройки', icon: 'gear' }
]

export function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('history')

  const title = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTab)?.title ?? 'История'
  }, [activeTab])

  return (
    <div className="app-shell">
      <header className="ios-navbar">
        <div className="ios-navbar__title">{title}</div>
      </header>

      <main className="app-content">
        {activeTab === 'history' && <HistoryPage />}
        {activeTab === 'statistics' && <StatisticsPage />}
        {activeTab === 'settings' && <SettingsPage />}
      </main>

      <div className="version-pill">v{appConfig.version}</div>

      <nav className="ios-tabbar" aria-label="Основная навигация">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={
              tab.id === activeTab
                ? 'ios-tabbar__item ios-tabbar__item--active'
                : 'ios-tabbar__item'
            }
            type="button"
            onClick={() => setActiveTab(tab.id)}
          >
            <span className={`ios-tabbar__icon ios-tabbar__icon--${tab.icon}`} />
            <span>{tab.title}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
