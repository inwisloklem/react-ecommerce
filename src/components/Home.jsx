import React, {Component} from 'react'
import SectionsList from './SectionsList'
import sections from './sections'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      sections
    }
  }

  render () {
    const {sections} = this.state
    return <SectionsList sections={sections} />
  }
}

export default Home
