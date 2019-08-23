import React, { Component } from 'react'
import List from './List'
import sections from './sections'
import styles from './Home.module.sass'

class Home extends Component {
  constructor () {
    super()

    this.state = {
      sections
    }
  }

  render () {
    const { sections } = this.state

    return (
      <section className={styles.upper}>
        <List items={sections} />
      </section>
    )
  }
}

export default Home
