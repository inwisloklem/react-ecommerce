import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Button.module.sass'

const validButtonTypes = ['button', 'reset', 'submit']

function Button ({children, isGoogle, type = 'button', ...otherProps}) {
  if (!validButtonTypes.includes(type)) {
    type = 'button'
  }

  return (
    <button
      className={classNames(styles.button, {[styles.buttonGoogle]: isGoogle})}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isGoogle: PropTypes.bool,
  type: PropTypes.string
}

export default Button
