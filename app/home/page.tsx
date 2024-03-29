import NavMenu from '@/components/NavMenu'
import styles from '@/styles/pages/home.module.css'

export default function Home() {
  return (
    <section className={`container ${styles.container}`}>
      <NavMenu />
    </section>
  )
}
