import React, { Component } from 'react'
import Button from './Button'
import styles from './SignUp.module.sass'

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

class SignUp extends Component {
  constructor () {
    super()
    this.state = initialState
  }

  handleChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState(initialState)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          name='displayName'
          type='text'
          placeholder='Display Name'
          value={this.state.displayName}
          onChange={this.handleChange}
        />

        <input
          className={styles.input}
          name='email'
          type='email'
          placeholder='Email'
          value={this.state.email}
          onChange={this.handleChange}
        />

        <input
          className={styles.input}
          name='password'
          type='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <input
          className={styles.input}
          name='confirmPassword'
          type='password'
          placeholder='Confirm Password'
          value={this.state.confirmPassword}
          onChange={this.handleChange}
        />

        <div className={styles.buttons}>
          <Button type='submit'>SignUp</Button>
        </div>
      </form>
    )
  }
}

export default SignUp
