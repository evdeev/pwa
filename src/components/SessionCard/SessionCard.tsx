import styles from './SessionCard.module.scss'

import { Pressable } from '../../shared/ui/Pressable/Pressable'

export interface SessionCardProps {
  date: string
  meta: string
  score: string
  average: string
  isCompetition?: boolean
}

export function SessionCard({
  date,
  meta,
  score,
  average,
  isCompetition = false
}: SessionCardProps) {
  const [current, max] = score.split('/')

  return (
    <Pressable className={styles.card} type="button">
      <div className={styles.top}>
        <div>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>{date}</h2>

            {isCompetition && <span className={styles.competitionBadge} />}
          </div>

          <p className={styles.meta}>{meta}</p>
        </div>

        <div className={styles.scoreWrapper}>
          <div className={styles.score}>
            <strong>{current}</strong>
            <span>/{max}</span>
          </div>

          <div className={styles.average}>{average}</div>
        </div>

        <div className={styles.chevron}>›</div>
      </div>
    </Pressable>
  )
}
