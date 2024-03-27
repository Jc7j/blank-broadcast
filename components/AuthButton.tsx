import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components'

import styles from '@/styles/components/AuthButton.module.css'

interface AuthButtonProps {
  auth: 'login' | 'logout' | 'signup'
}

export default function AuthButton({ auth }: AuthButtonProps) {
  if (auth === 'login') {
    return (
      <button className={`${styles.button}`}>
        <LoginLink>Log in</LoginLink>
      </button>
    )
  }

  if (auth === 'logout') {
    return (
      <button className={`${styles.button}`}>
        <LogoutLink>Log out</LogoutLink>
      </button>
    )
  }

  if (auth === 'signup') {
    return (
      <button className={`${styles.button}`}>
        <RegisterLink>Sign up</RegisterLink>
      </button>
    )
  }
}
