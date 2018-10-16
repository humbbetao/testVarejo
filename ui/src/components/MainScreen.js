import React, { PureComponent } from 'react'
import Header from './Header'
import Body from './Body'

class MainScreen extends PureComponent {
  render() {
    return (
      <div className={'container'}>
        <Header/>
        <Body/>
      </div>
    )
  }
}

export default MainScreen
