import styles from '@/styles/components/home-page-cards.module.css'

export default function HomePageCards() {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.dateDisplay}>March 15</div>
        <h3>Test</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit
          vehicula est, in consequat. Donec ullamcorper nulla non metus auctor
          fringilla. Vestibulum id ligula porta felis
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.dateDisplay}>March 15</div>
        <h3>Test</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </>
  )
}
