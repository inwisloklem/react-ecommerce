import React, { Component } from 'react'
import CollectionsList from './CollectionsList'
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
      <section className={styles.upper}>
        <CollectionsList collections={collections} />
      </section>
    )
  }
}

export default Shop
