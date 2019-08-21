import React from 'react'
import classNames from 'classnames'
import styles from './Home.module.sass'

function Home () {
  return (
    <main className={styles.home}>
      <section className={styles.upper}>
        <ul className={styles.list}>
          <li className={classNames(styles.item, styles.small)}>
            <div className={styles.inner}>
              <h2 className={styles.title}>Hats</h2>
            </div>
          </li>

          <li className={classNames(styles.item, styles.small)}>
            <div className={styles.inner}>
              <h2 className={styles.title}>Jackets</h2>
            </div>
          </li>

          <li className={classNames(styles.item, styles.small)}>
            <div className={styles.inner}>
              <h2 className={styles.title}>Sneakers</h2>
            </div>
          </li>

          <li className={classNames(styles.item, styles.large)}>
            <div className={styles.inner}>
              <h2 className={styles.title}>Womens</h2>
            </div>
          </li>

          <li className={classNames(styles.item, styles.large)}>
            <div className={styles.inner}>
              <h2 className={styles.title}>Mens</h2>
            </div>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Home
