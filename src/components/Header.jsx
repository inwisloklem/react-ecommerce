import React from 'react'
import { auth } from '../firebase'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.sass'

function Header ({ currentUser }) {
  const renderSignInOut = () => {
    if (currentUser) {
      return (
        <button className={styles.button} onClick={() => auth.signOut()}>
          Sign Out
        </button>
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

        {renderSignInOut()}
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
