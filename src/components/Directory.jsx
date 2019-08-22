import React, { Component } from 'react'
import List from './List'
import styles from './Directory.module.sass'
import uuid from 'uuid'

class Directory extends Component {
  constructor () {
    super()

    this.state = {
      items: [
        {
          id: uuid.v4(),
          image: 'https://i.ibb.co/cvpntL1/hats.png',
          isLarge: false,
          link: 'hats',
          title: 'Hats'
        },
        {
          id: uuid.v4(),
          image: 'https://i.ibb.co/px2tCc3/jackets.png',
          isLarge: false,
          link: 'jackets',
          title: 'Jackets'
        },
        {
          id: uuid.v4(),
          image: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          isLarge: false,
          link: 'sneakers',
          title: 'Sneakers'
        },
        {
          id: uuid.v4(),
          image: 'https://i.ibb.co/GCCdy8t/womens.png',
          isLarge: true,
          link: 'womens',
          title: 'Womens'
        },
        {
          id: uuid.v4(),
          image: 'https://i.ibb.co/R70vBrQ/men.png',
          isLarge: true,
          link: 'mens',
          title: 'Mens'
        }
      ]
    }
  }

  render () {
    const { items } = this.state

    return (
      <section className={styles.upper}>
        <List items={items} />
      </section>
    )
  }
}

export default Directory
