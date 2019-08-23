import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Shop from './Shop'
import styles from './Inner.module.sass'

function Inner () {
  return (
    <main className={styles.component}>
      <Header />

      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Shop} exact path='/shop' />
      </Switch>
    </main>
  )
}

export default Inner
