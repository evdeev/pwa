import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, View, Page, Navbar, Block, Card, Toolbar, Link } from 'framework7-react'

import 'framework7/css/bundle'

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

const f7params = {
  name: 'Archery PWA',
  theme: 'ios'
}

function AppView() {
  return (
    <App {...f7params}>
      <View main tab tabActive url="/">
        <Page>
          <Navbar title="Журнал тренировок" large />

          <Block strong inset>
            История тренировок
          </Block>

          {sessions.map((session) => (
            <Card key={session.id} outlineIos>
              <Block>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>
                  {session.title}
                </div>

                <div style={{ color: '#6d6d72', marginBottom: 4 }}>
                  {session.date}
                </div>

                <div style={{ color: '#6d6d72', marginBottom: 12 }}>
                  Дистанция: {session.distance}
                </div>

                <div style={{ fontSize: 24, fontWeight: 700 }}>
                  {session.result}
                </div>
              </Block>
            </Card>
          ))}

          <Toolbar bottom tabbar labels>
            <Link tabLinkActive text="История" />
            <Link text="Статистика" />
            <Link text="Настройки" />
          </Toolbar>

          <div
            style={{
              textAlign: 'center',
              color: '#8e8e93',
              fontSize: 12,
              padding: '24px 0 48px'
            }}
          >
            Version 0.1.0
          </div>
        </Page>
      </View>
    </App>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppView />
  </React.StrictMode>
)
