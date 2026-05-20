import styles from './Navbar.module.scss'

interface NavbarProps {
  title: string
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className={styles.navbar}>
      <div className={styles.title}>{title}</div>
    </header>
  )
}
