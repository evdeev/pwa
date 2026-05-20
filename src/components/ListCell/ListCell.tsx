import styles from './ListCell.module.scss'

interface ListCellProps {
  label: string
  value?: string
}

export function ListCell({ label, value }: ListCellProps) {
  return (
    <div className={styles.cell}>
      <span>{label}</span>
      {value && <span className={styles.value}>{value}</span>}
    </div>
  )
}
