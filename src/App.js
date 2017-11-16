import React, { Component } from 'react'

import Masonry from './components/Masonry'
import { data } from './mocks/data'

export class App extends Component {
  render() {
    return (
      <Masonry
        cols={3}
        items={data}
      />
    )
  }
}

export default App
