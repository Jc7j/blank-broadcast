import CTA from './CTA'

import styles from '@/styles/components/signup-card.module.css'

export default function SignupCard() {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>
        Blank Broadcast{' '}
        <span className={styles.partOfHeading}>
          is a sanctuary of silence and a canvas for the unspoken
        </span>
      </p>
      <CTA text="Sign up" backgroundColor='secondary'/>
      <CTA text="Log in"  backgroundColor='gray' />
    </div>
  )
}
