import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text
} from 'react-native'

export class Masonry extends Component {

  constructor() {
    super()

    this.loadMoreData = this.loadMoreData.bind(this)
  }

  loadMoreData() {
    //Make remote API call here
  }

  render() {
    return (
      <Text>
        Your code here
      </Text>
    )
  }
}

Masonry.propTypes = {
  cols: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired
}

export default Masonry
