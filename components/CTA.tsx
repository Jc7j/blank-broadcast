import clsx from 'clsx'
import styles from '@/styles/components/cta.module.css'

export default function CTA({
  text,
  backgroundColor,
  url,
}: {
  text: string
  backgroundColor: 'gray' | 'secondary' | 'purple'
  url?: string
}) {
  return (
    <button className={clsx(styles.container, backgroundColor === "gray" && styles.colorGray, backgroundColor === 'secondary' && styles.colorSecondary)}>
      {/* <a href=""></a> */}
      {text}
    </button>
  )
}
