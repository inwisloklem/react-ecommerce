import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.sass'

function Header () {
  return (
    <nav className={styles.list}>
      <NavLink className={styles.link} exact to='/'>
        Home
      </NavLink>

      <NavLink className={styles.link} exact to='/shop'>
        Shop
      </NavLink>
    </nav>
  )
}

export default Header
