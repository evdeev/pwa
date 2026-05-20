import {
  App as Framework7App,
  Link,
  Navbar,
  Page,
  Tab,
  Tabs,
  Toolbar,
  View
} from 'framework7-react'

import { HistoryPage } from '../pages/HistoryPage'
import { StatisticsPage } from '../pages/StatisticsPage'
import { SettingsPage } from '../pages/SettingsPage'
import { appConfig } from './config'

const f7params = {
  name: appConfig.name,
  theme: 'ios'
}

export function App() {
  return (
    <Framework7App {...f7params}>
      <View main className="safe-areas">
        <Page pageContent={false}>
          <Tabs animated>
            <Tab id="history" className="page-content" tabActive>
              <Navbar large transparent>
                <div className="ios-navbar__title">История</div>
              </Navbar>

              <HistoryPage />
            </Tab>

            <Tab id="statistics" className="page-content">
              <Navbar large transparent>
                <div className="ios-navbar__title">Статистика</div>
              </Navbar>

              <StatisticsPage />
            </Tab>

            <Tab id="settings" className="page-content">
              <Navbar large transparent>
                <div className="ios-navbar__title">Настройки</div>
              </Navbar>

              <SettingsPage />
            </Tab>
          </Tabs>

          <Toolbar bottom tabbar>
            <Link tabLink="#history" tabLinkActive iconIos="f7:clock" text="История" />
            <Link tabLink="#statistics" iconIos="f7:chart_bar" text="Статистика" />
            <Link tabLink="#settings" iconIos="f7:gear" text="Настройки" />
          </Toolbar>

          <div className="version-pill">v{appConfig.version}</div>
        </Page>
      </View>
    </Framework7App>
  )
}
