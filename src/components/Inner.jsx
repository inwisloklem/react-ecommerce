import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import { auth } from '../firebase'
import Auth from './Auth'
import Home from './Home'
import Shop from './Shop'
import styles from './Inner.module.sass'

class Inner extends Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeAuth = null

  componentDidMount () {
    this.unsubscribeAuth = auth.onAuthStateChanged(user => {
      const { email } = user
      this.setState({ currentUser: user })
      console.info(email)
    })
  }

  componentWillUnmount () {
    this.unsubscribeAuth()
  }

  render () {
    const { currentUser } = this.state

    return (
      <main className={styles.component}>
        <Header currentUser={currentUser} />

        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={Shop} exact path='/shop' />
          <Route component={Auth} exact path='/signin' />
        </Switch>
      </main>
    )
  }
}

export default Inner
