import React, { Component } from 'react'
import ListItem from './ListItem'
import uuid from 'uuid'
import styles from './Home.module.sass'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      items: ['Hats', 'Jackets', 'Sneakers', 'Mens', 'Womens'].map(
        (title, index) => {
          return {
            id: uuid.v4(),
            isLarge: index > 2,
            title
          }
        }
      )
    }
  }

  render () {
    return (
      <main className={styles.component}>
        <section className={styles.upper}>
          <ul className={styles.list}>
            {this.state.items.map(item => (
              <ListItem item={item} key={item.id} />
            ))}
          </ul>
        </section>
      </main>
    )
  }
}

export default Home
