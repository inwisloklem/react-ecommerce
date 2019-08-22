import React from 'react'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './ListItem.module.sass'

function ListItem ({ history, isLarge, image, link, match, title }) {
  const handleClick = () => history.push(match.url + link)

  return (
    <li
      className={classNames(styles.item, styles[isLarge ? 'large' : 'small'])}
      style={{ backgroundImage: `url(${image})` }}
      onClick={handleClick}
    >
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </li>
  )
}

ListItem.propTypes = {
  history: PropTypes.object,
  isLarge: PropTypes.bool,
  image: PropTypes.string,
  match: PropTypes.object,
  link: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default withRouter(ListItem)
