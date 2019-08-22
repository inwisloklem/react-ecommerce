import React, { Component } from 'react'
import List from './List'
import styles from './Home.module.sass'
import uuid from 'uuid'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      items: [
        {
          id: uuid.v4(),
          image: 'https://i.ibb.co/cvpntL1/hats.png',
          isLarge: false,
          title: 'Hats'
        },
        {
          id: uuid.v4(),
          image: 'https://i.ibb.co/px2tCc3/jackets.png',
          isLarge: false,
          title: 'Jackets'
        },
        {
          id: uuid.v4(),
          image: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          isLarge: false,
          title: 'Sneakers'
        },
        {
          id: uuid.v4(),
          image: 'https://i.ibb.co/GCCdy8t/womens.png',
          isLarge: true,
          title: 'Womens'
        },
        {
          id: uuid.v4(),
          image: 'https://i.ibb.co/R70vBrQ/men.png',
          isLarge: true,
          title: 'Mens'
        }
      ]
    }
  }

  render () {
    const { items } = this.state
    return (
      <main className={styles.component}>
        <section className={styles.upper}>
          <List items={items} />
        </section>
      </main>
    )
  }
}

export default Home
