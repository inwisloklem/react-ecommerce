import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './ListItem.module.sass'

function ListItem ({ item: { isLarge, title } }) {
  return (
    <li
      className={classNames(styles.item, styles[isLarge ? 'large' : 'small'])}
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
    title: PropTypes.string.isRequired
  })
}

export default ListItem
