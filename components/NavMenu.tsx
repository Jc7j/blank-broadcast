'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from '@/styles/components/NavMenu.module.css'

export default function NavMenu() {
  const pathName = usePathname()

  return (
    <nav className={`container ${styles.container}`}>
      <Link href="/home" className={clsx(styles.link, pathName === '/home' && styles.activeLink)}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m9 22h-4a1 1 0 0 1 -1-1v-10l8-8 8 8v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1-1v-4a1 1 0 0 0 -1-1h-2a1 1 0 0 0 -1 1v4a1 1 0 0 1 -1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="m12.01 4.42-8.3 8.3a1 1 0 1 1 -1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1 -1.42 1.41z" />
        </svg>
      </Link>
      <button  className={`${styles.link}`}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1 -2 0v-4h-4a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 2 0v4z"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <Link href="/settings"   className={clsx(styles.link, pathName === '/settings' && styles.activeLink)}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
          <path d="m21 20v-1a5 5 0 0 0 -5-5h-8a5 5 0 0 0 -5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z" />
        </svg>
      </Link>
    </nav>
  )
}
