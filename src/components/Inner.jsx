import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import styles from './Inner.module.sass'

function Inner () {
  return (
    <main className={styles.component}>
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Shop} exact path='/shop' />
      </Switch>
    </main>
  )
}

export default Inner
