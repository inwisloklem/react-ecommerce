import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Directory from './Directory'
import styles from './Inner.module.sass'

function Inner () {
  return (
    <main className={styles.component}>
      <Switch>
        <Route component={Directory} exact path='/' />
      </Switch>
    </main>
  )
}

export default Inner
