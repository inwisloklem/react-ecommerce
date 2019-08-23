import React from 'react'
import PropTypes from 'prop-types'
import styles from './CollectionsItem.module.sass'

function CollectionsItem ({ image, name, price, routeName }) {
  return (
    <li className={styles.item}>
      <div className={styles.outer}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      <div className={styles.inner}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.price}>${price}</span>
      </div>
    </li>
  )
}

CollectionsItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.number,
  routeName: PropTypes.string
}

export default CollectionsItem
