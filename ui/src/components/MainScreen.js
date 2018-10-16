import React, { PureComponent } from 'react'
import Header from './Header'
import Body from './Body'

class MainScreen extends PureComponent {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    )
  }
}

export default MainScreen
