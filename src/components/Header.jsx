import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.sass'

function Header ({ currentUser }) {
  if (!currentUser) {
    return null
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

        <NavLink className={styles.link} exact to='/signin'>
          Sign In
        </NavLink>
      </nav>

      <div className={styles.info}>{currentUser.email}</div>
    </div>
  )
}

Header.propTypes = {
  currentUser (props, propName, componentName) {
    if (typeof props[propName] === 'object') {
      return
    }
    return new Error(`${componentName} only accepts object or null`)
  }
}

export default Header
