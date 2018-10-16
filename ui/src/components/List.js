import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { search } from '../actions/search'
import ListItem from './ListItem'

class List extends PureComponent {
  componentDidMount() {
    this.props.search('')
  }

  render() {
    const { result } = this.props
    return (
      <div className={'container'}>
        {/*{(result || []).map((item, idx) => <ListItem key={idx} item={item}/>)}*/}
      </div>
    )
  }
}

List.defaultProps = { result: [], query: '' }
List.propsTypes = {
  result: PropTypes.object,
  query: PropTypes.String
}

const mapStateToProps = state => ({
  result: state.result,
  query: state.query
})
const mapDispatchToProps = dispatch => {
  return {
    search: query => dispatch(search(query))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
