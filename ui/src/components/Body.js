import React, { PureComponent } from 'react'
import List from './List'

class Body extends PureComponent {
  render() {
    return (
      <div className={'container'}>
        <List/>
      </div>
    )
  }
}

export default Body
