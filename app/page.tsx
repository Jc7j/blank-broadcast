import AuthButton from '@/components/AuthButton'
import styles from '@/styles/pages/main.module.css'

export default function Home() {
  return (
    <main className={`container ${styles.container}`}>
      <h1 className={styles.header}>BLANK BROADCAST</h1>
      <div className={styles.authContainer}>
        <AuthButton auth="signup" />
        <AuthButton auth="login" />
      </div>
      <div className={styles.circleContainer}>
        <div className={styles.circleText}>
          lorem ipsum loremlorem ipsum lorem
        </div>
        <div className={styles.circleText}>
          lorem ipsum loremlorem ipsum lorem
        </div>
        <div className={styles.circleText}>
          lorem ipsum loremlorem ipsum lorem
        </div>
        <div className={styles.circleText}>
          lorem ipsum loremlorem ipsum lorem
        </div>
        <div className={styles.circleText}>
          lorem ipsum loremlorem ipsum lorem
        </div>
        <div className={styles.circleText}>
          lorem ipsum loremlorem ipsum lorem
        </div>
        <div className={styles.circleText}>
          lorem ipsum loremlorem ipsum lorem
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <p>
          A sanctuary of silence & canvas for the unspoken. Like X (formerly
          Twitter), but with anony-mousity.
        </p>
        <p>
          No one will know who you are unless you make it known in your posts
        </p>
      </div>
    </main>
  )
}
