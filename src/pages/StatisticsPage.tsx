export function StatisticsPage() {
  return (
    <section className="page-section" aria-label="Статистика">
      <div className="ios-list-card">
        <div className="ios-list-cell">
          <span>Период</span>
          <span className="ios-list-cell__value">Неделя</span>
        </div>
        <div className="ios-list-cell">
          <span>Средний бал</span>
          <span className="ios-list-cell__value">7.55</span>
        </div>
        <div className="ios-list-cell">
          <span>Сессий</span>
          <span className="ios-list-cell__value">3</span>
        </div>
      </div>

      <div className="placeholder">
        Графики и динамика появятся следующим этапом. Сейчас экран нужен как независимый модуль навигации.
      </div>
    </section>
  )
}
