import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Auth from './Auth'
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
        <Route component={Auth} exact path='/signin' />
      </Switch>
    </main>
  )
}

export default Inner
