import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import { HistoryPage } from './pages/HistoryPage'
import { StatisticsPage } from './pages/StatisticsPage'
import { SettingsPage } from './pages/SettingsPage'

function App() {
  const [tab, setTab] = useState('history')

  const renderPage = () => {
    switch (tab) {
      case 'statistics':
        return <StatisticsPage />

      case 'settings':
        return <SettingsPage />

      default:
        return <HistoryPage />
    }
  }

  const getTitle = () => {
    switch (tab) {
      case 'statistics':
        return 'Статистика'

      case 'settings':
        return 'Настройки'

      default:
        return 'Журнал тренировок'
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f2f2f7',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif'
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          paddingTop: 'env(safe-area-inset-top)',
          background: 'rgba(242,242,247,0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(60,60,67,0.12)'
        }}
      >
        <div
          style={{
            padding: '12px 20px 14px',
            fontSize: '34px',
            fontWeight: 700,
            letterSpacing: '-0.03em'
          }}
        >
          {getTitle()}
        </div>
      </div>

      {renderPage()}

      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: 'calc(env(safe-area-inset-bottom) + 8px)',
          background: 'rgba(249,249,249,0.94)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          borderTop: '1px solid rgba(60,60,67,0.12)',
          zIndex: 200
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingTop: '10px'
          }}
        >
          <button
            onClick={() => setTab('history')}
            style={{
              border: 'none',
              background: 'transparent',
              color: tab === 'history' ? '#007aff' : '#8e8e93',
              fontSize: '12px',
              fontWeight: 500,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <div style={{ fontSize: '22px' }}>◉</div>
            История
          </button>

          <button
            onClick={() => setTab('statistics')}
            style={{
              border: 'none',
              background: 'transparent',
              color: tab === 'statistics' ? '#007aff' : '#8e8e93',
              fontSize: '12px',
              fontWeight: 500,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <div style={{ fontSize: '22px' }}>◎</div>
            Статистика
          </button>

          <button
            onClick={() => setTab('settings')}
            style={{
              border: 'none',
              background: 'transparent',
              color: tab === 'settings' ? '#007aff' : '#8e8e93',
              fontSize: '12px',
              fontWeight: 500,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <div style={{ fontSize: '22px' }}>⚙︎</div>
            Настройки
          </button>
        </div>
      </div>

      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: '72px',
          textAlign: 'center',
          color: '#8e8e93',
          fontSize: '12px',
          zIndex: 150
        }}
      >
        Version 0.1.0
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
