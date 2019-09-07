import React, { Component } from 'react'
import { signInGoogle } from '../firebase'
import Button from './Button'
import styles from './SignIn.module.sass'

const initialState = {
  email: '',
  password: ''
}

class SignIn extends Component {
  constructor () {
    super()
    this.state = initialState
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState(initialState)
  }

  render () {
    const { email, password } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          name='email'
          placeholder='Email'
          type='email'
          value={email}
          onChange={this.handleChange}
        />

        <input
          className={styles.input}
          name='password'
          placeholder='Password'
          type='password'
          value={password}
          onChange={this.handleChange}
        />

        <div className={styles.buttons}>
          <Button type='submit' onClick={this.handleSubmit}>
            Sign In
          </Button>

          <Button isGoogle onClick={signInGoogle}>
            Sign In Google
          </Button>
        </div>
      </form>
    )
  }
}

export default SignIn
