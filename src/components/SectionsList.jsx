import React from 'react'
import SectionsItem from './SectionsItem'
import PropTypes from 'prop-types'
import styles from './SectionsList.module.sass'

function SectionsList ({sections}) {
  return (
    <ul className={styles.list}>
      {sections.map(({id, ...otherProps}) => (
        <SectionsItem key={id} {...otherProps} />
      ))}
    </ul>
  )
}

SectionsList.propTypes = {
  sections: PropTypes.array.isRequired
}

export default SectionsList
