import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

import NavMenu from '@/components/NavMenu'
import styles from '@/styles/pages/home.module.css'
import Posts from '@/components/Posts'

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession()

  if (!await isAuthenticated()) {
    redirect('/')
  }

  return (
    <section className={`container ${styles.container}`}>
      <NavMenu />
      <Posts />
    </section>
  )
}
