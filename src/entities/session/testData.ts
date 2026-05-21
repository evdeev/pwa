import type { SessionSummary } from './types'

export const maySessions: SessionSummary[] = [
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

export const aprilSessions: SessionSummary[] = [
  {
    id: 'test-2026-04-28',
    dateLabel: '28 апреля',
    title: 'Тренировка',
    type: 'training',
    distanceMeters: 18,
    score: 438,
    maxScore: 600,
    average: 7.3,
    arrowsCount: 60
  },
  {
    id: 'test-2026-04-21',
    dateLabel: '21 апреля',
    title: 'Соревнование',
    type: 'competition',
    distanceMeters: 18,
    score: 461,
    maxScore: 600,
    average: 7.68,
    arrowsCount: 60
  }
]

export const marchSessions: SessionSummary[] = [
  {
    id: 'test-2026-03-31',
    dateLabel: '31 марта',
    title: 'Первый турнир',
    type: 'competition',
    distanceMeters: 18,
    score: 442,
    maxScore: 600,
    average: 7.36,
    arrowsCount: 60
  }
]
