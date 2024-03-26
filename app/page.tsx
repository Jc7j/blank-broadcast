import HomePageCards from '@/components/HomePageCards'
import SignupCard from '@/components/SignupCard'
import styles from '@/styles/pages/main.module.css'

export default function Home() {
  return (
    <main className={`container`}>
      <div className={styles.container}>
        <SignupCard />
        <div className={`section`}>
        <HomePageCards />
        </div>
      </div>
    </main>
  )
}
