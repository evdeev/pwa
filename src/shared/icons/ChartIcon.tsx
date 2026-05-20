import styles from './Icon.module.scss'

export function ChartIcon() {
  const className = styles.icon + ' ' + styles.chart
  return <span className={className} />
}
