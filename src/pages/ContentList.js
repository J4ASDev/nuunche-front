import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { API } from '../lib/axios'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getContentPlaylist } from '../actions/contentList'

import HomeLayout from '../components/Layouts/HomeLayout'
import ContentListComponent from '../components/ContentList'

class ContentListPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playlist: [],
    }
  }

  onFormatterData = () => {
    const { playlist } = this.props

    const formattedPlayList = playlist.map(
      ({ _id, title, images, description }) => ({
        id: _id,
        title: title.original,
        source: `${API.NUNCHEE}/assets/images/view/${
          images.find(({ type }) => type === 'backdrop')._id
        }?type=backdrop&placeholder=true`,
        description: description.plain.original,
      })
    )

    this.setState({ playlist: formattedPlayList })
  }

  async componentDidMount() {
    await this.props.getContentPlaylist()
    await this.onFormatterData()
  }

  render() {
    const { playlist } = this.state

    return (
      <HomeLayout>
        <ContentListComponent baseUrlApi={API.BASE} playlist={playlist} />
      </HomeLayout>
    )
  }
}

ContentListPage.propTypes = {
  playlist: PropTypes.array,
  getContentPlaylist: PropTypes.func,
}

const mapStateToProps = ({ contentList }) => ({
  playlist: contentList.playlist,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getContentPlaylist,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentListPage)
