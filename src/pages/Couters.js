import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCounters } from '../actions/counters'

import HomeLayout from '../components/Layouts/HomeLayout'
import CountersComponent from '../components/Counters'

class CountersPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counters: [],
      total: 0,
    }
  }

  // Nota: Debido a que el indice es inestable, pase un id y luego busque su indice actual.
  onSubtractOrAdd = async (id, count) => {
    const { countersList } = this.props

    const findIndex = countersList.findIndex((counter) => counter.id === id)
    let copyCounters = JSON.parse(JSON.stringify(countersList))

    copyCounters[findIndex].value = count

    await this.props.setCounters(copyCounters)
  }

  createNewCounter = () => {
    const { counters } = this.state

    let copyCounters = JSON.parse(JSON.stringify(counters))

    copyCounters.push({
      value: 0,
      id: ++counters.length,
    })

    this.props.setCounters(copyCounters)
  }

  calculateTotalCount = (countersList) => {
    let total = 0

    countersList.map((counter) => (total += counter.value))

    return { total }
  }

  async componentDidUpdate(prevProps) {
    const { countersList } = this.props
    const { countersList: prevCountersList } = prevProps

    if (countersList !== prevCountersList) {
      const { total } = this.calculateTotalCount(countersList)

      this.setState({
        total,
        counters: countersList.map((counter) => ({
          ...counter,
          onClick: (id, count) => this.onSubtractOrAdd(id, count),
        })),
      })
    }
  }

  render() {
    const { counters, total } = this.state

    return (
      <HomeLayout>
        <CountersComponent
          newCounter={this.createNewCounter}
          total={total}
          counters={counters}
        />
      </HomeLayout>
    )
  }
}

CountersPage.propTypes = {
  setCounters: PropTypes.func,
  countersList: PropTypes.array,
}

const mapStateToprops = ({ counters }) => ({
  countersList: counters.countersList,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setCounters }, dispatch)
}

export default connect(mapStateToprops, mapDispatchToProps)(CountersPage)
