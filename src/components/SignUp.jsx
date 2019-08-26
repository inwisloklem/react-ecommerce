import React, { Component } from 'react'
import styles from './SignUp.module.sass'

class SignUp extends Component {
  render () {
    return (
      <form>
        <input className={styles.input} type='text' placeholder='Display Name' />
        <input className={styles.input} type='email' placeholder='Email' />
        <input className={styles.input} type='password' placeholder='Password' />
        <input className={styles.input} type='password' placeholder='Confirm Password' />

        <div className={styles.buttons}>
          <button className={styles.button} type='submit'>Sign Up</button>
        </div>
      </form>
    )
  }
}

export default SignUp
