import React from 'react'
import ListItem from './ListItem'
import PropTypes from 'prop-types'
import styles from './List.module.sass'

function List ({ items }) {
  return (
    <ul className={styles.list}>
      {items.map(item => {
        const { id } = item
        return <ListItem item={item} key={id} />
      })}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired
}

export default List
