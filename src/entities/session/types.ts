export type SessionType = 'training' | 'competition'

export interface SessionSummary {
  id: string
  dateLabel: string
  title: string
  type: SessionType
  distanceMeters: number
  score: number
  maxScore: number
  average: number
  arrowsCount: number
}
