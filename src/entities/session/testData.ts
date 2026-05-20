import type { SessionSummary } from './types'

export const testSessions: SessionSummary[] = [
  {
    id: 'test-2026-05-20',
    dateLabel: '20 мая',
    title: 'Тестовая тренировка',
    type: 'training',
    distanceMeters: 18,
    score: 441,
    maxScore: 600,
    average: 7.35,
    arrowsCount: 60
  },
  {
    id: 'test-2026-05-18',
    dateLabel: '18 мая',
    title: 'Тестовая тренировка',
    type: 'training',
    distanceMeters: 18,
    score: 452,
    maxScore: 600,
    average: 7.53,
    arrowsCount: 60
  },
  {
    id: 'test-2026-05-15',
    dateLabel: '15 мая',
    title: 'Тестовое соревнование',
    type: 'competition',
    distanceMeters: 18,
    score: 467,
    maxScore: 600,
    average: 7.78,
    arrowsCount: 60
  }
]
