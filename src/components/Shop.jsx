import React, { Component } from 'react'
import collections from './collections'
import styles from './Shop.module.sass'

class Shop extends Component {
  constructor () {
    super()

    this.state = {
      collections
    }
  }

  render () {
    return (
      <pre className={styles.pre}>
        {JSON.stringify(this.state.collections, undefined, 4)}
      </pre>
    )
  }
}

export default Shop
