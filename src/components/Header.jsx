import React from 'react'
import {signOutGoogle} from '../firebase'
import {NavLink} from 'react-router-dom'
import styles from './Header.module.sass'

function Header ({currentUser}) {
  const renderSignInSignOut = () => {
    if (currentUser) {
      const {email, uid} = currentUser
      console.info(uid)

      return (
        <>
          <button className={styles.button} onClick={signOutGoogle}>
            Sign Out
          </button>

          <div className={styles.email}>{email}</div>
        </>
      )
    }

    return (
      <NavLink className={styles.link} exact to='/signin'>
        Sign In
      </NavLink>
    )
  }

  return (
    <div className={styles.inner}>
      <nav className={styles.list}>
        <NavLink className={styles.link} exact to='/'>
          Home
        </NavLink>

        <NavLink className={styles.link} exact to='/shop'>
          Shop
        </NavLink>

        {renderSignInSignOut()}
      </nav>
    </div>
  )
}

Header.propTypes = {
  currentUser (props, propName, componentName) {
    return typeof props[propName] === 'object'
      ? undefined
      : new Error(`${componentName} only accepts object or null`)
  }
}

export default Header
