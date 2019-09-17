import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import CollectionsItem from './CollectionsItem'
import pathJoin from '../pathJoin'
import PropTypes from 'prop-types'
import styles from './CollectionsList.module.sass'

function CollectionsList ({collections, match}) {
  return (
    <ul className={styles.collections}>
      {collections.map(({id, routeName, title, items}) => (
        <li className={styles.item} key={id}>
          <h2 className={styles.title}>
            <Link className={styles.link} to={pathJoin(match.url, routeName)}>
              {title}
            </Link>
          </h2>

          <ul className={styles.list}>
            {items
              .filter((_, index) => index < 4)
              .map(({id, ...otherProps}) => (
                <CollectionsItem key={id} {...otherProps} />
              ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

CollectionsList.propTypes = {
  collections: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
}

export default withRouter(CollectionsList)
