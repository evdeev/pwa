import styles from './Icon.module.scss'

export function GearIcon() {
  const className = styles.icon + ' ' + styles.gear
  return <span className={className} />
}
