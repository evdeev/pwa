import type { PropsWithChildren, ReactNode } from 'react'

import styles from './PageLayout.module.scss'

interface PageLayoutProps extends PropsWithChildren {
  sectionTitle?: ReactNode
}

export function PageLayout({ children, sectionTitle }: PageLayoutProps) {
  return (
    <div className={styles.layout}>
      <section className={styles.section}>
        {sectionTitle && <div className={styles.sectionTitle}>{sectionTitle}</div>}

        {children}
      </section>
    </div>
  )
}
