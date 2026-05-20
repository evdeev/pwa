import React from 'react'

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

export function HistoryPage() {
  return (
    <div style={{ padding: '0 16px 120px' }}>
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

          <div style={{ color: '#8e8e93', marginBottom: '4px' }}>
            {session.date}
          </div>

          <div style={{ color: '#8e8e93', marginBottom: '16px' }}>
            Дистанция: {session.distance}
          </div>

          <div style={{ fontSize: '30px', fontWeight: 700 }}>
            {session.result}
          </div>
        </div>
      ))}
    </div>
  )
}
