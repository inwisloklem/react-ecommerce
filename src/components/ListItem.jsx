import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './ListItem.module.sass'

function ListItem ({ image, isLarge, match, routeName, title }) {
  return (
    <li
      className={classNames(styles.item, styles[isLarge ? 'large' : 'small'])}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Link className={styles.outer} to={match.url + routeName}>
        <div className={styles.inner}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </Link>
    </li>
  )
}

ListItem.propTypes = {
  image: PropTypes.string,
  isLarge: PropTypes.bool,
  match: PropTypes.object,
  routeName: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default withRouter(ListItem)
