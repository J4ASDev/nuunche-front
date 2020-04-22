import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import HomeLayout from '../components/Layouts/HomeLayout'
import HomeComponent from '../components/Index'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  onHandleHomeRouter = () => {
    this.props.history.push('/contenidos')
  }

  render() {
    return (
      <HomeLayout>
        <HomeComponent onHandleButton={this.onHandleHomeRouter} />
      </HomeLayout>
    )
  }
}

export default withRouter(HomePage)
