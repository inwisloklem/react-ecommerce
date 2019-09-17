import React from 'react'
import classNames from 'classnames'
import SignIn from './SignIn'
import SignUp from './SignUp'
import styles from './Auth.module.sass'

function Auth () {
  return (
    <div className={styles.inner}>
      <div className={classNames(styles.block, styles.blockLeft)}>
        <h2 className={styles.title}>I already have an account</h2>

        <div className={styles.description}>
          Sign in with your email and password
        </div>

        <SignIn />
      </div>

      <div className={classNames(styles.block, styles.blockRight)}>
        <h2 className={styles.title}>I don't have an account</h2>

        <div className={styles.description}>
          Sign up with your email and password
        </div>

        <SignUp />
      </div>
    </div>
  )
}

export default Auth
