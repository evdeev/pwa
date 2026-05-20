import React from 'react'
import ReactDOM from 'react-dom/client'

const sessions = [
  {
    id: 1,
    title: 'Тестовая тренировка',
    date: '20 мая 2026',
    result: '441/600',
    distance: '18 м'
  },
  {
    id: 2,
    title: 'Тестовая тренировка',
    date: '18 мая 2026',
    result: '452/600',
    distance: '18 м'
  },
  {
    id: 3,
    title: 'Тестовая тренировка',
    date: '15 мая 2026',
    result: '467/600',
    distance: '18 м'
  }
]

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f2f2f7',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif',
        paddingBottom: '120px'
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          background: 'rgba(242,242,247,0.9)',
          backdropFilter: 'blur(20px)',
          padding: '24px 20px 12px',
          fontSize: '34px',
          fontWeight: 700,
          zIndex: 10
        }}
      >
        Журнал тренировок
      </div>

      <div style={{ padding: '0 16px' }}>
        {sessions.map((session) => (
          <div
            key={session.id}
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              padding: '18px',
              marginBottom: '16px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
            }}
          >
            <div
              style={{
                fontSize: '18px',
                fontWeight: 600,
                marginBottom: '8px'
              }}
            >
              {session.title}
            </div>

            <div
              style={{
                color: '#8e8e93',
                marginBottom: '4px'
              }}
            >
              {session.date}
            </div>

            <div
              style={{
                color: '#8e8e93',
                marginBottom: '16px'
              }}
            >
              Дистанция: {session.distance}
            </div>

            <div
              style={{
                fontSize: '30px',
                fontWeight: 700
              }}
            >
              {session.result}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(249,249,249,0.94)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid #d1d1d6',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '12px 0 28px'
        }}
      >
        <div style={{ color: '#007aff', fontWeight: 600 }}>История</div>
        <div style={{ color: '#8e8e93' }}>Статистика</div>
        <div style={{ color: '#8e8e93' }}>Настройки</div>
      </div>

      <div
        style={{
          position: 'fixed',
          bottom: '78px',
          width: '100%',
          textAlign: 'center',
          color: '#8e8e93',
          fontSize: '12px'
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
