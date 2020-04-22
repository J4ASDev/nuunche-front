import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { API } from '../lib/axios'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDetailMedia } from '../actions/details'

import HomeLayout from '../components/Layouts/HomeLayout'
import DetailsComponent from '../components/Details'

class DetailsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      date: '',
      image: {
        source: '',
        alt: '',
      },
      description: '',
      details: [],
    }
  }

  onFormatterData = () => {
    const { detailsMedia } = this.props

    if (detailsMedia) {
      const {
        title,
        description,
        available,
        images,
        staff,
        tags,
      } = detailsMedia

      const noInfo = ['Informacion no disponible.']

      const staffOpts = {
        title: 'Staff',
        id: 1,
        content: staff
          ? staff.map(
              ({ role, name }) => `${role.es}: ${name.first} ${name.last}.`
            )
          : noInfo,
      }

      const tagsOpts = {
        title: 'Etiquetas',
        id: 2,
        content: tags || noInfo,
      }

      this.setState({
        title: title.original,
        description: description.plain.original,
        date: available.from,
        image: {
          source: `${API.NUNCHEE}/assets/images/view/${
            images.find(({ type }) => type === 'backdrop')._id
          }?type=backdrop&placeholder=true`,
          alt: title.original,
        },
        details: [staffOpts, tagsOpts],
      })
    }
  }

  async componentDidMount() {
    await this.props.getDetailMedia(this.props.match.params.id)
    await this.onFormatterData()
  }

  render() {
    return (
      <HomeLayout>
        <DetailsComponent {...this.state} />
      </HomeLayout>
    )
  }
}

DetailsPage.propTypes = {
  detailsMedia: PropTypes.object,
  getDetailMedia: PropTypes.func,
}

const mapStateToprops = ({ details }) => ({
  detailsMedia: details.detailsMedia,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDetailMedia }, dispatch)
}

export default connect(mapStateToprops, mapDispatchToProps)(DetailsPage)
