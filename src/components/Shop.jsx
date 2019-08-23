import React, { Component } from 'react'
import CollectionsList from './CollectionsList'
import collections from './collections'

class Shop extends Component {
  constructor () {
    super()

    this.state = {
      collections
    }
  }

  render () {
    return (
      <section>
        <CollectionsList collections={collections} />
      </section>
    )
  }
}

export default Shop
