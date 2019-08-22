import React from 'react'
import { Route } from 'react-router-dom'
import Directory from './Directory'
import styles from './Inner.module.sass'

function Inner () {
  return (
    <main className={styles.component}>
      <Route exact path='/' component={Directory} />
    </main>
  )
}

export default Inner
