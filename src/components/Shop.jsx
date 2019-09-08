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
    return <CollectionsList collections={collections} />
  }
}

export default Shop
