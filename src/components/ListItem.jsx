import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './ListItem.module.sass'

function ListItem ({ item: { isLarge, image, title } }) {
  return (
    <li
      className={classNames(styles.item, styles[isLarge ? 'large' : 'small'])}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </li>
  )
}

ListItem.propTypes = {
  item: PropTypes.shape({
    isLarge: PropTypes.bool,
    image: PropTypes.string,
    title: PropTypes.string.isRequired
  })
}

export default ListItem
