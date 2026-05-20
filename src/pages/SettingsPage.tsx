import { appConfig } from '../app/config'

export function SettingsPage() {
  return (
    <section className="page-section" aria-label="Настройки">
      <div className="ios-list-card">
        <div className="ios-list-cell">
          <span>Приложение</span>
          <span className="ios-list-cell__value">{appConfig.shortName}</span>
        </div>
        <div className="ios-list-cell">
          <span>Версия</span>
          <span className="ios-list-cell__value">{appConfig.version}</span>
        </div>
        <div className="ios-list-cell">
          <span>Режим</span>
          <span className="ios-list-cell__value">PWA</span>
        </div>
      </div>

      <div className="placeholder">
        Позже здесь появятся импорт, экспорт, настройки тренировок, экипировка и управление данными.
      </div>
    </section>
  )
}
