import styles from './TabBar.module.scss'

export interface TabBarItem {
  id: string
  label: string
  icon: React.ReactNode
}

interface TabBarProps {
  items: TabBarItem[]
  activeTab: string
  onChange: (tab: string) => void
}

export function TabBar({ items, activeTab, onChange }: TabBarProps) {
  return (
    <nav className={styles.tabbar} aria-label="Основная навигация">
      {items.map((item) => (
        <button
          key={item.id}
          className={item.id === activeTab ? `${styles.item} ${styles.active}` : styles.item}
          type="button"
          onClick={() => onChange(item.id)}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}
