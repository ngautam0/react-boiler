import React from 'react'
import { connect } from 'react-redux'
import HomeComponent from '../Components/Home'

import PropTypes from 'prop-types'
import { ActionCreators } from '../Actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => ({
  tags: state.homeReducer.tags
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(ActionCreators, dispatch)
)

class Home extends React.Component {
  componentWillMount () {
    this.props.dispatchTags()
  }

  render () {
    return (
      <HomeComponent
        appName='NFA App'
        tags={this.props.tags}
      />
    )
  }
}

Home.propTypes = {
  dispatchTags: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
