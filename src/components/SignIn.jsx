import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './SignIn.module.sass'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({
      email: '',
      password: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          name='email'
          placeholder='Email'
          type='email'
          value={this.state.email}
          onChange={this.handleChange}
        />

        <input
          className={styles.input}
          name='password'
          placeholder='Password'
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <div className={styles.buttons}>
          <button className={styles.button} type='submit'>
            Sign In
          </button>

          <button
            className={classNames(styles.button, styles.buttonGoogle)}
            type='submit'
          >
            Sign In Google
          </button>
        </div>
      </form>
    )
  }
}

export default SignIn
