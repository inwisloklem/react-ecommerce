import React, { Component } from 'react'
import SectionsList from './SectionsList'
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
        <SectionsList sections={sections} />
      </section>
    )
  }
}

export default Home
