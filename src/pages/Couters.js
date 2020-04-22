import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onSubtractOrAdd } from '../actions/counters'

import HomeLayout from '../components/Layouts/HomeLayout'
import CountersComponent from '../components/Counters'

class CountersPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countersList: [],
    }
  }

  createCounters = () => {
    const { counter_1, counter_2, counter_3 } = this.props

    const counters = [
      {
        id: 1,
        count: counter_1,
        onClick: (id, count) => this.props.onSubtractOrAdd(id, count),
      },
      {
        id: 2,
        count: counter_2,
        onClick: (id, count) => this.props.onSubtractOrAdd(id, count),
      },
      {
        id: 3,
        count: counter_3,
        onClick: (id, count) => this.props.onSubtractOrAdd(id, count),
      },
    ]

    this.setState({ countersList: counters })
  }

  async componentDidMount() {
    await this.createCounters()
  }

  render() {
    const { counter_1, counter_2, counter_3 } = this.props
    const { countersList } = this.state

    return (
      <HomeLayout>
        <CountersComponent
          countersList={countersList}
          total={counter_1 + counter_2 + counter_3}
        />
      </HomeLayout>
    )
  }
}

CountersPage.propTypes = {
  counter_1: PropTypes.number,
  counter_2: PropTypes.number,
  counter_3: PropTypes.number,
  onSubtractOrAdd: PropTypes.func,
}

const mapStateToprops = ({ counters }) => ({
  counter_1: counters.counter_1,
  counter_2: counters.counter_2,
  counter_3: counters.counter_3,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ onSubtractOrAdd }, dispatch)
}

export default connect(mapStateToprops, mapDispatchToProps)(CountersPage)
